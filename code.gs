// ==========================================
// GOOGLE APPS SCRIPT - UCAPAN & DOA
// ==========================================

const SHEET_ID = 'https://docs.google.com/spreadsheets/d/1SfzLPHZGCSLAGTC-k4auob7ozE7E2VkXjXg47lkYwJs/edit?usp=sharing'; // Akan diisi otomatis
const SHEET_NAME = 'Ucapan';

function doGet(e) {
  const action = e.parameter.action;
  
  if (action === 'getWishes') {
    return getWishes();
  }
  
  return ContentService.createTextOutput(JSON.stringify({
    success: false,
    message: 'Invalid action'
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    if (data.action === 'addWish') {
      return addWish(data);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Invalid action'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getWishes() {
  try {
    const sheet = getSheet();
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const wishes = [];
    
    // Skip header row
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const wish = {};
      
      headers.forEach((header, index) => {
        wish[header] = row[index];
      });
      
      wishes.push(wish);
    }
    
    // Sort by timestamp (newest first)
    wishes.sort((a, b) => {
      return new Date(b.timestamp || b.Date) - new Date(a.timestamp || a.Date);
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      wishes: wishes
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function addWish(data) {
  try {
    const sheet = getSheet();
    
    // Add new row
    sheet.appendRow([
      new Date(),
      data.name,
      data.message,
      data.timestamp
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Wish added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // Create sheet if not exists
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Add headers
    sheet.appendRow(['Timestamp', 'Name', 'Message', 'Date']);
    // Format header
    sheet.getRange(1, 1, 1, 4).setFontWeight('bold').setBackground('#D4AF37');
  }
  
  return sheet;
}
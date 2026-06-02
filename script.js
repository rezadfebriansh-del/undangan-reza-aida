
function buka(){document.getElementById('cover').style.display='none';document.getElementById('isi').style.display='block';}
setInterval(()=>{
let t=new Date('2026-07-03T08:00:00').getTime()-Date.now();
let d=Math.floor(t/86400000);
let h=Math.floor((t%86400000)/3600000);
let m=Math.floor((t%3600000)/60000);
let s=Math.floor((t%60000)/1000);
let e=document.getElementById('countdown');
if(e)e.innerHTML=`${d} Hari ${h} Jam ${m} Menit ${s} Detik`;
},1000);

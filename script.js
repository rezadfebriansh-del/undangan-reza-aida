
function openInvite(){
 document.getElementById('cover').style.display='none';
 document.getElementById('main').style.display='block';
}
const target=new Date('2026-07-03T08:00:00').getTime();
setInterval(function(){
 let now=new Date().getTime();
 let d=target-now;
 let days=Math.floor(d/(1000*60*60*24));
 let hrs=Math.floor((d%(1000*60*60*24))/(1000*60*60));
 let mins=Math.floor((d%(1000*60*60))/(1000*60));
 let secs=Math.floor((d%(1000*60))/1000);
 let el=document.getElementById('countdown');
 if(el){el.innerHTML=days+' Hari '+hrs+' Jam '+mins+' Menit '+secs+' Detik';}
},1000);

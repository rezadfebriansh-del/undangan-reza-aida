function openInvite(){

document.getElementById("cover").style.display="none";
document.getElementById("main").style.display="block";

window.scrollTo(0,0);

}

const target =
new Date("2026-07-03T08:00:00").getTime();

setInterval(function(){

const now =
new Date().getTime();

const distance =
target-now;

const days =
Math.floor(distance/(1000*60*60*24));

const hours =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes =
Math.floor((distance%(1000*60*60))/(1000*60));

const seconds =
Math.floor((distance%(1000*60))/1000);

const el =
document.getElementById("countdown");

if(el){

el.innerHTML=
days+" Hari "+
hours+" Jam "+
minutes+" Menit "+
seconds+" Detik";

}

},1000);

const params =
new URLSearchParams(window.location.search);

const tamu =
params.get("to");

if(tamu){

document.getElementById("guestName").innerHTML =
"Kepada Yth.<br><b>"+tamu+"</b>";

}

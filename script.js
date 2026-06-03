function openInvite(){

document.getElementById("cover").style.display="none";
document.getElementById("main").style.display="block";

document.getElementById("musik").play();

}

const target =
new Date("2026-07-03T08:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const diff = target - now;

const d = Math.floor(diff/(1000*60*60*24));
const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
const m = Math.floor((diff%(1000*60*60))/(1000*60));
const s = Math.floor((diff%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
`${d} Hari ${h} Jam ${m} Menit ${s} Detik`;

},1000);

const url =
new URLSearchParams(window.location.search);

const tamu =
url.get("to");

if(tamu){

document.getElementById("guestName").innerHTML =
`Kepada Yth.<br><b>${tamu}</b>`;

}

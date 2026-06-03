function openInvite(){

document.getElementById("cover").style.display="none";

document.getElementById("main").style.display="block";

document.getElementById("bgmusic").play();

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

const petals =
document.querySelector('.petals');

function createPetal(){

const petal =
document.createElement('div');

petal.classList.add('petal');

petal.style.left =
Math.random()*100+'vw';

petal.style.animationDuration =
(8+Math.random()*5)+'s';

petal.style.opacity =
Math.random();

petals.appendChild(petal);

setTimeout(()=>{
petal.remove();
},13000);

}

setInterval(createPetal,500);

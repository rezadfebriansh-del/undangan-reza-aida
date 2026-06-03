function openInvite(){

    document.getElementById("cover").style.display = "none";
    document.getElementById("main").style.display = "block";

    const music = document.getElementById("bgmusic");

    if(music){
        music.play().catch(()=>{});
    }
}

const targetDate =
new Date("2026-07-03T08:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

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

        el.innerHTML =
        days + " Hari " +
        hours + " Jam " +
        minutes + " Menit " +
        seconds + " Detik";
    }
}

setInterval(updateCountdown,1000);
updateCountdown();

const params =
new URLSearchParams(window.location.search);

const tamu =
params.get("to");

if(tamu){

    document.getElementById("guestName").innerHTML =
    "Kepada Yth.<br><b>"+tamu+"</b>";
}

const petals =
document.querySelector(".petals");

function createPetal(){

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
    Math.random()*100 + "vw";

    petal.style.animationDuration =
    (8 + Math.random()*5) + "s";

    petals.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },13000);
}

setInterval(createPetal,600);

function openInvite(){

```
document.getElementById("cover").style.display="none";

document.getElementById("main").style.display="block";

const music =
document.getElementById("bgmusic");

if(music){
    music.play().catch(()=>{});
}

window.scrollTo({
    top:0,
    behavior:"smooth"
});
```

}

/* ==========================
COUNTDOWN
========================== */

const target =
new Date("2026-07-03T08:00:00").getTime();

function updateCountdown(){

```
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

    el.innerHTML =

    '<div class="time-box">'+
    '<span>'+days+'</span>'+
    '<small>Hari</small>'+
    '</div>'+

    '<div class="time-box">'+
    '<span>'+hours+'</span>'+
    '<small>Jam</small>'+
    '</div>'+

    '<div class="time-box">'+
    '<span>'+minutes+'</span>'+
    '<small>Menit</small>'+
    '</div>'+

    '<div class="time-box">'+
    '<span>'+seconds+'</span>'+
    '<small>Detik</small>'+
    '</div>';
}
```

}

updateCountdown();

setInterval(updateCountdown,1000);

/* ==========================
NAMA TAMU
========================== */

const params =
new URLSearchParams(window.location.search);

const tamu =
params.get("to");

if(tamu){

```
document.getElementById("guestName")
.innerHTML=

"Kepada Yth.<br><strong>"
+ tamu +
"</strong>";
```

}

/* ==========================
FALLING PETALS
========================== */

const petalsContainer =
document.querySelector('.petals');

function createPetal(){

```
if(!petalsContainer) return;

const petal =
document.createElement('div');

petal.classList.add('petal');

petal.style.left =
Math.random()*100 + 'vw';

petal.style.animationDuration =
(8 + Math.random()*6) + 's';

petal.style.opacity =
0.3 + Math.random()*0.7;

petal.style.transform =
'rotate('+Math.random()*360+'deg)';

petalsContainer.appendChild(petal);

setTimeout(()=>{
    petal.remove();
},15000);
```

}

setInterval(createPetal,600);

/* ==========================
SCROLL FADE
========================== */

const observer =
new IntersectionObserver(entries=>{

```
entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add('show');
    }

});
```

},{
threshold:0.15
});

document
.querySelectorAll('section,.card,.gift-card')
.forEach(el=>{

```
el.classList.add('hidden');

observer.observe(el);
```

});

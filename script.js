const targetDate = new Date("July 3, 2026 08:00:00").getTime();

const countdown = setInterval(() => {

```
const now = new Date().getTime();
const distance = targetDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
    days + " Hari " +
    hours + " Jam " +
    minutes + " Menit " +
    seconds + " Detik";
```

}, 1000);

function openInvite() {

```
document.getElementById("cover").style.display = "none";

document.getElementById("main").style.display = "block";

document.getElementById("bgmusic").play();
```

}

function copyReza() {
navigator.clipboard.writeText("7166873589");
alert("Nomor rekening Reza berhasil disalin");
}

function copyAida() {
navigator.clipboard.writeText("7324707098");
alert("Nomor rekening Aida berhasil disalin");
}

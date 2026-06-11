function openInvite() {

    var cover = document.getElementById("cover");
    var main = document.getElementById("main");
    var music = document.getElementById("bgmusic");

    if (cover) {
        cover.style.display = "none";
    }

    if (main) {
        main.style.display = "block";
    }

    if (music) {
        music.play().catch(function(){});
    }
}

function copyReza() {
    navigator.clipboard.writeText("7166873589");
    alert("Nomor rekening Reza berhasil disalin");
}

function copyAida() {
    navigator.clipboard.writeText("7324707098");
    alert("Nomor rekening Aida berhasil disalin");
}

function updateCountdown() {

    var el = document.getElementById("countdown");

    if (!el) {
        return;
    }

    var target = new Date("July 3, 2026 08:00:00").getTime();
    var now = new Date().getTime();
    var diff = target - now;

    if (diff <= 0) {
        el.innerHTML = "Hari Bahagia Telah Tiba";
        return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    el.innerHTML =
        days + " Hari " +
        hours + " Jam " +
        minutes + " Menit " +
        seconds + " Detik";
}

updateCountdown();
setInterval(updateCountdown, 1000);

var params = new URLSearchParams(window.location.search);
var tamu = params.get("to");

if (tamu) {

    var guest = document.getElementById("guestName");

    if (guest) {
        guest.innerHTML =
            "Kepada Yth.<br><b>" + tamu + "</b>";
    }
}

var petalsContainer = document.querySelector(".petals");

function createPetal() {

    if (!petalsContainer) {
        return;
    }

    var petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left =
        (Math.random() * 100) + "vw";

    petal.style.animationDuration =
        (8 + Math.random() * 5) + "s";

    petalsContainer.appendChild(petal);

    setTimeout(function () {
        petal.remove();
    }, 13000);
}

setInterval(createPetal, 600);

// =========================
// OPEN INVITATION
// =========================

function openInvite() {

    const cover = document.getElementById("cover");
    const main = document.getElementById("main");
    const music = document.getElementById("bgmusic");

    if (cover) {
        cover.style.display = "none";
    }

    if (main) {
        main.style.display = "block";
    }

    if (music) {
        music.play().catch(function () {});
    }
}

// =========================
// COPY REKENING
// =========================

function copyReza() {

    navigator.clipboard.writeText("7166873589")
    .then(function () {
        alert("Nomor rekening Reza berhasil disalin");
    })
    .catch(function () {
        alert("Gagal menyalin rekening");
    });
}

function copyAida() {

    navigator.clipboard.writeText("7324707098")
    .then(function () {
        alert("Nomor rekening Aida berhasil disalin");
    })
    .catch(function () {
        alert("Gagal menyalin rekening");
    });
}

// =========================
// DOM LOADED
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // =====================
    // NAMA TAMU
    // =====================

    const params = new URLSearchParams(window.location.search);
    const tamu = params.get("to");

    const guestName =
        document.getElementById("guestName");

    if (tamu && guestName) {

        guestName.innerHTML =
            "Kepada Yth.<br><b>" +
            decodeURIComponent(tamu) +
            "</b>";
    }

    // =====================
    // COUNTDOWN
    // =====================

    const targetDate =
        new Date("2026-07-03T10:00:00").getTime();

    function updateCountdown() {

        const now =
            new Date().getTime();

        const distance =
            targetDate - now;

        if (distance < 0) {

            document.getElementById("days").textContent = "0";
            document.getElementById("hours").textContent = "0";
            document.getElementById("minutes").textContent = "0";
            document.getElementById("seconds").textContent = "0";

            return;
        }

        const days =
            Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours =
            Math.floor(
                (distance % (1000 * 60 * 60 * 24))
                /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (distance % (1000 * 60 * 60))
                /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (distance % (1000 * 60))
                /
                1000
            );

        const dayEl =
            document.getElementById("days");

        const hourEl =
            document.getElementById("hours");

        const minuteEl =
            document.getElementById("minutes");

        const secondEl =
            document.getElementById("seconds");

        if (dayEl) dayEl.textContent = days;
        if (hourEl) hourEl.textContent = hours;
        if (minuteEl) minuteEl.textContent = minutes;
        if (secondEl) secondEl.textContent = seconds;
    }

    updateCountdown();

    setInterval(updateCountdown, 1000);

    // =====================
    // MUSIC BUTTON
    // =====================

    const music =
        document.getElementById("bgmusic");

    const musicBtn =
        document.getElementById("musicBtn");

    let playing = false;

    if (musicBtn && music) {

        musicBtn.addEventListener("click", function () {

            if (playing) {

                music.pause();

                musicBtn.innerHTML = "♪";

                playing = false;

            } else {

                music.play().catch(function () {});

                musicBtn.innerHTML = "❚❚";

                playing = true;
            }
        });
    }

    // =====================
    // PETALS
    // =====================

    const petalsContainer =
        document.querySelector(".petals");

    function createPetal() {

        if (!petalsContainer) return;

        const petal =
            document.createElement("div");

        petal.className = "petal";

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.opacity =
            (0.4 + Math.random() * 0.6);

        petal.style.animationDuration =
            (8 + Math.random() * 5) + "s";

        petalsContainer.appendChild(petal);

        setTimeout(function () {

            petal.remove();

        }, 13000);
    }

    setInterval(createPetal, 600);
});

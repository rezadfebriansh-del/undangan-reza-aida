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
        requestAnimationFrame(() => {
            main.style.opacity = "1";
        });
    }

    if (music) {
        music.play().catch(() => {});
    }
}

// =========================
// COPY REKENING SAFE
// =========================

function copyBank(btn, number, label) {

    navigator.clipboard.writeText(number)
        .then(() => {

            // ubah tombol langsung (INLINE)
            const original = btn.textContent;

            btn.textContent = "Copied ✓";
            btn.style.background = "#1f1f1f";
            btn.style.border = "1px solid #d4af37";
            btn.style.color = "#d4af37";

            btn.disabled = true;

            // reset setelah 2 detik
            setTimeout(() => {

                btn.textContent = original;
                btn.style.background = "";
                btn.style.border = "";
                btn.style.color = "";
                btn.disabled = false;

            }, 2000);

        })
        .catch(() => {
            alert("Gagal menyalin");
        });
}

// =========================
// DOM READY
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // =====================
    // TAMU
    // =====================

    const params = new URLSearchParams(window.location.search);
    const tamu = params.get("to");
    const guestName = document.getElementById("guestName");

    if (tamu && guestName) {
        guestName.innerHTML =
            "Kepada Yth.<br><b>" +
            decodeURIComponent(tamu) +
            "</b>";
    }

    // =====================
    // COUNTDOWN
    // =====================

    const targetDate = new Date("2026-07-03T10:00:00").getTime();

    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");

    function updateCountdown() {

        const now = Date.now();
        const distance = targetDate - now;

        if (distance <= 0) {
            if (d) d.textContent = 0;
            if (h) h.textContent = 0;
            if (m) m.textContent = 0;
            if (s) s.textContent = 0;
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (d) d.textContent = days;
        if (h) h.textContent = hours;
        if (m) m.textContent = minutes;
        if (s) s.textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // =====================
    // MUSIC
    // =====================

    const musicBtn = document.getElementById("musicBtn");
    const music = document.getElementById("bgmusic");

    let playing = false;

    if (musicBtn && music) {
        musicBtn.addEventListener("click", function () {

            if (playing) {
                music.pause();
                musicBtn.textContent = "♪";
            } else {
                music.play().catch(() => {});
                musicBtn.textContent = "❚❚";
            }

            playing = !playing;
        });
    }

    // =====================
    // PETALS (SAFE)
    // =====================

    const container = document.querySelector(".petals");

    if (container) {

        setInterval(() => {

            const petal = document.createElement("div");
            petal.className = "petal";

            petal.style.left = Math.random() * 100 + "vw";
            petal.style.opacity = 0.5;
            petal.style.animationDuration = (6 + Math.random() * 4) + "s";

            container.appendChild(petal);

            setTimeout(() => petal.remove(), 10000);

        }, 700);
    }

    // =====================
    // WISH SYSTEM INIT SAFE
    // =====================

    renderWishes();
});


// =========================
// WISH SYSTEM (FIXED)
// =========================

function addWish() {

    const name = document.getElementById("wishName");
    const message = document.getElementById("wishMessage");

    if (!name || !message) return;

    const nama = name.value.trim();
    const pesan = message.value.trim();

    if (!nama || !pesan) return;

    const wishes = JSON.parse(localStorage.getItem("wishes") || "[]");

    wishes.unshift({
        name: nama,
        message: pesan
    });

    localStorage.setItem("wishes", JSON.stringify(wishes));

    name.value = "";
    message.value = "";

    renderWishes();
}

function renderWishes() {

    const list = document.getElementById("wishList");
    if (!list) return;

    list.innerHTML = "";

    const wishes = JSON.parse(localStorage.getItem("wishes") || "[]");

    wishes.forEach(wish => {

        const avatar = wish.name
            ? wish.name.charAt(0).toUpperCase()
            : "?";

        const item = document.createElement("div");
        item.className = "wish-item fade-in";

        item.innerHTML = `
            <div class="wish-top">
                <div class="wish-avatar">${avatar}</div>
                <div class="wish-name">${wish.name}</div>
            </div>
            <div class="wish-message">${wish.message}</div>
        `;

        list.appendChild(item);
    });
}

function copyBank(number, label) {
    navigator.clipboard.writeText(number)
        .then(() => {

            // feedback lebih premium dari alert
            const toast = document.createElement("div");

            toast.textContent = label + " tersalin ✔";

            toast.style.position = "fixed";
            toast.style.bottom = "90px";
            toast.style.right = "20px";
            toast.style.background = "#d4af37";
            toast.style.color = "#fff";
            toast.style.padding = "12px 18px";
            toast.style.borderRadius = "12px";
            toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
            toast.style.zIndex = "9999";
            toast.style.fontWeight = "600";

            document.body.appendChild(toast);

            setTimeout(() => {
                toast.remove();
            }, 2000);

        })
        .catch(() => {
            alert("Gagal menyalin");
        });
}

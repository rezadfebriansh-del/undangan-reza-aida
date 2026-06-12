// Mengambil elemen dari DOM
const cover = document.getElementById('cover');
const mainContent = document.getElementById('main-content');
const audio = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
const musicIcon = musicBtn.querySelector('i');

let isPlaying = false;

// Fungsi saat tombol "Buka Undangan" diklik
function openInvitation() {
    // 1. Geser cover ke atas
    cover.classList.add('open');
    
    // 2. Tampilkan konten utama
    mainContent.classList.add('visible');
    
    // 3. Tampilkan tombol kontrol musik
    musicBtn.classList.add('active');
    
    // 4. Putar musik
    playMusic();
    
    // 5. Izinkan scroll pada body (opsional, jika sebelumnya di-lock)
    document.body.style.overflowY = 'auto';
}

// Fungsi untuk memutar musik
function playMusic() {
    audio.play();
    isPlaying = true;
    musicIcon.classList.add('fa-spin');
}

// Fungsi untuk menjeda musik
function pauseMusic() {
    audio.pause();
    isPlaying = false;
    musicIcon.classList.remove('fa-spin');
}

// Fungsi toggle (nyala/mati) saat ikon musik diklik
function toggleMusic() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

// Opsional: Animasi muncul saat di-scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Terapkan animasi scroll ke setiap section
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

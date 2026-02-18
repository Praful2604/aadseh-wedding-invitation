// Sparkles
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash');
    for (let i = 0; i < 50; i++) {
        const s = document.createElement('div');
        s.className = 'splash-sparkle';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.animationDelay = Math.random() * 3 + 's';
        s.style.animationDuration = (2 + Math.random() * 2) + 's';
        splash.appendChild(s);
    }
});

// Open invitation
function openInvitation() {
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('main').style.opacity = '1';
}


//background Audio
function openInvitation() {
  document.getElementById("splash").style.display = "none";
  
  let main = document.getElementById("main");
  main.style.opacity = "1";

  let music = document.getElementById("bg-music");
  music.play();
}


// Scroll reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Countdown to 14 March 2026 12:30 PM
function updateCountdown() {
    const target = new Date('2026-03-14T12:25:00');
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
        document.getElementById('cd-days').textContent = '0';
        document.getElementById('cd-hours').textContent = '0';
        document.getElementById('cd-mins').textContent = '0';
        document.getElementById('cd-secs').textContent = '0';
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

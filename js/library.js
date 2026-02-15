// ===== Stars =====
function createStars() {
  for (let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (Math.random() * 2 + 2) + 's';
    star.style.width = (Math.random() * 2 + 1) + 'px';
    star.style.height = star.style.width;
    document.body.appendChild(star);
  }
}

// ===== Floating Particles =====
function createParticles() {
  const container = document.querySelector('.particles-bg');
  const colors = [
    'rgba(255, 77, 109, 0.4)',
    'rgba(255, 143, 163, 0.3)',
    'rgba(255, 179, 198, 0.3)',
    'rgba(255, 215, 0, 0.2)',
    'rgba(200, 150, 255, 0.3)'
  ];

  setInterval(() => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 6 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.background = color;
    particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
    container.appendChild(particle);

    setTimeout(() => particle.remove(), 18000);
  }, 400);
}

// ===== Book Click Handler =====
function openBook(bookUrl) {
  // Small animation before navigating
  document.body.style.transition = 'opacity 0.5s ease';
  document.body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = bookUrl;
  }, 500);
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  createParticles();
});

// ===== Floating Hearts Background =====
function createFloatingHearts() {
  const container = document.querySelector('.hearts-bg');
  const hearts = ['❤', '💕', '💗', '♥', '💖', '💘'];

  setInterval(() => {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 8 + 6) + 's';
    heart.style.animationDelay = '0s';
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 14000);
  }, 500);
}

// ===== Twinkling Stars =====
function createStars() {
  for (let i = 0; i < 60; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (Math.random() * 2 + 2) + 's';
    document.body.appendChild(star);
  }
}

// ===== Word-by-word animation =====
function animateIntroText() {
  const introEl = document.querySelector('.intro-text');
  const text = introEl.getAttribute('data-text');
  const words = text.split(' ');
  introEl.innerHTML = '';

  words.forEach((word, i) => {
    const span = document.createElement('span');
    span.className = 'word';
    span.textContent = word;
    span.style.animationDelay = (i * 0.15 + 0.5) + 's';
    introEl.appendChild(span);
  });

  // Show password section after all words appear
  const totalDelay = words.length * 0.15 + 1.5;
  setTimeout(() => {
    document.querySelector('.password-section').classList.add('visible');
  }, totalDelay * 1000);
}

// ===== Password Check =====
function checkPassword() {
  const input = document.querySelector('.password-input');
  const errorMsg = document.querySelector('.error-msg');
  const password = input.value.trim().toLowerCase();

  if (password === 'kaplumbağa deden') {
    // Success!
    errorMsg.classList.remove('show');
    triggerSuccessExplosion();
    setTimeout(() => {
      window.location.href = 'library.html';
    }, 1800);
  } else {
    // Wrong password
    input.classList.add('shake');
    errorMsg.textContent = 'Hayır, şifre bu değil 💔';
    errorMsg.classList.add('show');
    setTimeout(() => {
      input.classList.remove('shake');
    }, 500);
  }
}

// ===== Success Heart Explosion =====
function triggerSuccessExplosion() {
  const overlay = document.querySelector('.success-overlay');
  overlay.classList.add('active');

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const hearts = ['❤️', '💖', '💗', '💕', '💘', '💝', '💞', '✨', '🌟'];

  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('span');
    heart.className = 'success-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = centerX + 'px';
    heart.style.top = centerY + 'px';
    heart.style.fontSize = (Math.random() * 30 + 15) + 'px';

    const angle = (Math.PI * 2 * i) / 50;
    const distance = Math.random() * 400 + 200;
    heart.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
    heart.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
    heart.style.setProperty('--tr', (Math.random() * 720 - 360) + 'deg');
    heart.style.animationDelay = (Math.random() * 0.3) + 's';

    overlay.appendChild(heart);
  }
}

// ===== Enter key support =====
function handleKeyPress(e) {
  if (e.key === 'Enter') {
    checkPassword();
  }
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  createFloatingHearts();
  animateIntroText();
});

// ============ NAV: scroll state + mobile toggle ============
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');

window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
}, { passive: true });

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

// ============ HERO SKY: twinkling stars + one shooting star ============
const canvas = document.getElementById('sky');
const ctx = canvas.getContext('2d');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let stars = [];
let shootingStar = null;
let dpr = Math.min(window.devicePixelRatio || 1, 2);

function resize() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  seedStars(rect.width, rect.height);
}

function seedStars(w, h) {
  const count = Math.floor((w * h) / 6500);
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h * 0.9,
    r: Math.random() * 1.3 + 0.3,
    baseAlpha: Math.random() * 0.5 + 0.35,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.6 + 0.3,
  }));
}

function maybeSpawnShootingStar(w, h) {
  if (shootingStar || reduceMotion) return;
  if (Math.random() < 0.0025) {
    const startX = Math.random() * w * 0.6;
    const startY = Math.random() * h * 0.3;
    shootingStar = {
      x: startX, y: startY,
      vx: 6 + Math.random() * 3,
      vy: 3 + Math.random() * 1.5,
      life: 1,
    };
  }
}

let t = 0;
function draw() {
  const w = canvas.width / dpr;
  const h = canvas.height / dpr;
  ctx.clearRect(0, 0, w, h);

  t += 0.016;

  stars.forEach(s => {
    const alpha = reduceMotion
      ? s.baseAlpha
      : s.baseAlpha + Math.sin(t * s.speed + s.phase) * 0.28;
    ctx.beginPath();
    ctx.fillStyle = `rgba(234, 240, 251, ${Math.max(0, alpha)})`;
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  maybeSpawnShootingStar(w, h);

  if (shootingStar) {
    const s = shootingStar;
    ctx.save();
    const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 8, s.y - s.vy * 8);
    grad.addColorStop(0, `rgba(255, 211, 122, ${s.life})`);
    grad.addColorStop(1, 'rgba(255, 211, 122, 0)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x - s.vx * 8, s.y - s.vy * 8);
    ctx.stroke();
    ctx.restore();

    s.x += s.vx;
    s.y += s.vy;
    s.life -= 0.012;
    if (s.life <= 0 || s.x > w + 40 || s.y > h + 40) shootingStar = null;
  }

  requestAnimationFrame(draw);
}

resize();
window.addEventListener('resize', resize);
requestAnimationFrame(draw);

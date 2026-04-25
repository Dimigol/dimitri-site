/* ─── CURSOR ─── */
const cursor = document.getElementById('cursor');
let mx = -100, my = -100;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

/* ─── NAV ─── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ─── REVEAL ON SCROLL ─── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ─── SMOOTH SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ─── NETFLIX CARD CAROUSEL ─── */
const rcards = Array.from(document.querySelectorAll('.nf-rcard'));
let activeCard = 0;

if (rcards.length) {
  rcards[0].classList.add('active');
  setInterval(() => {
    rcards[activeCard].classList.remove('active');
    activeCard = (activeCard + 1) % rcards.length;
    rcards[activeCard].classList.add('active');
  }, 2000);
}

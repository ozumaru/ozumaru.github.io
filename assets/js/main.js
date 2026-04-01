// Intersection Observer for fade-in
const observer = new IntersectionObserver((entries) => {
entries.forEach(e => {
    if (e.isIntersecting) {
    e.target.classList.add('visible');
    observer.unobserve(e.target);
    }
});
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Nav active state
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
let current = '';
sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
});
navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
    ? 'var(--cyan)' : '';
});
});
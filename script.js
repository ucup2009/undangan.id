// Smooth scroll buttons
document.querySelectorAll('.btn-scroll').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight nav while scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 100;
    if (pageYOffset >= secTop) {
      current = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

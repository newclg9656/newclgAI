// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

// Hide nav on scroll down, show on scroll up (desktop only)
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }
  lastScroll = currentScroll;
});

// Close mobile menu when clicking outside or on a link
document.addEventListener('click', function (event) {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.remove('active');
  }
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('active');
  });
});

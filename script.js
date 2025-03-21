// Mobile Navigation Toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (navList.classList.contains('active')) {
      navList.classList.remove('active');
    }
  });
});

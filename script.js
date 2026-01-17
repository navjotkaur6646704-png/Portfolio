// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Change header background on scroll

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = '#020617';
  } else {
    header.style.background = '#0f172a';
  }
});

// Simple fade-in animation on scroll

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(40px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});

// Contact button alert

const hireBtn = document.querySelector('.btn');
if (hireBtn) {
  hireBtn.addEventListener('click', () => {
    alert('Thank you for your interest! Please contact me via email.');
  });
}
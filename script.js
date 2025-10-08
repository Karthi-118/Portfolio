// Smooth scroll for internal nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

setInterval(() => {
  testimonialCard.classList.add('slide-left');
  setTimeout(() => {
    testimonyIndex = (testimonyIndex + 1) % testimonies.length;
    showTestimony(testimonyIndex);
    testimonialCard.classList.remove('slide-left'); // reset animation class
  }, 600);
}, 3000);

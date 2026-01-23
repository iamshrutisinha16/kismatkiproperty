document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.navbar');
  if (!nav) return; // Safety check

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });
});


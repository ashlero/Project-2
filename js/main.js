// JS scripts placed here
const hamburger = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded',!expanded);
  menu.classList.toggle('expanded');
});
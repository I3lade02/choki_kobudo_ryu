const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__link');
const content = document.querySelector('.content');

hamburger.addEventListener('click', () => {
  toggleMenu();
});

document.addEventListener('scroll', () => {
  if (navMenu.classList.contains('hide')) {
    return; // Do nothing if the menu is already hidden
  }
  
  toggleMenu(); // Close the menu if it's open
});

function toggleMenu() {
  navMenu.classList.toggle('hide');
  content.classList.toggle('shifted');
}

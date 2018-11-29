let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('open')
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
  if (toggleIcon.className != 'menuIcon open') {
    toggleIcon.className += ' open';
  } else {
    toggleIcon.className = 'menuIcon';
  }
});

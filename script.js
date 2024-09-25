// Toggle Dark Mode
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Toggle Hamburger Menu for Mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Pop-up for Registration
const registerBtn = document.getElementById('registerBtn');
const popup = document.getElementById('popup');
const closePopup = document.querySelector('.close');

registerBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == popup) {
    popup.style.display = 'none';
  }
});

'use strict';

const themeToggleBtn = document.querySelector('.btn__toggle');

function setTheme() {
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

themeToggleBtn.addEventListener('click', setTheme);

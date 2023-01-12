const menuIconEl = document.querySelector('#menu-icon');
const menuEl = document.querySelector('.menu-div-mobile');
const crossIconEl = document.querySelector('#cross-icon');

menuIconEl.addEventListener('click', e => {
  menuEl.classList.remove('off').add('on');
});
crossIconEl.addEventListener('click', e => {
  menuEl.classList.add('off');
});

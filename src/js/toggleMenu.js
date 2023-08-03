const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-mobile');

burger.onclick = () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
}
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-mobile');

burger.onclick = () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  if(menu.className === 'menu-mobile active'){
    window.onscroll = function () {
      window.scrollTo(0,0);
    }
  }
}
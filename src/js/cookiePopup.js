const cookieBtn = document.querySelectorAll('.cookie-btn');
const cookiePopup = document.querySelector('.cookie-popup');

cookieBtn.forEach(btn => {
  btn.onclick = () => {
    let isAccept = btn.getAttribute('data-cookie') == 'accept' ? true : false;
    if(isAccept){
      localStorage.setItem('cookieState', 'accepted');
      cookiePopup.classList.remove('active');
    } else {
      localStorage.setItem('cookieState', 'denied');
      cookiePopup.classList.remove('active');
    }
  }
});

window.onload = () => {
  if(localStorage.getItem('cookieState') == null){
    cookiePopup.classList.add('active');
  } else if(localStorage.getItem('cookieState') == 'accepted' || localStorage.getItem('cookieState') == 'denied'){
    cookiePopup.classList.remove('active');
  }
  pfelHover();
}
const cookieBtn = document.querySelectorAll('.cookie-btn');
const cookiePopup = document.querySelector('.cookie-popup');

cookieBtn.forEach(btn => {
  btn.onclick = () => {
    let isAccept = btn.getAttribute('data-cookie') == 'accept' ? true : false;
    if(isAccept){
      sessionStorage.setItem('cookieState', 'accepted');
      cookiePopup.classList.remove('active');
    } else {
      sessionStorage.setItem('cookieState', 'denied');
      cookiePopup.classList.remove('active');
    }
  }
});

window.onload = () => {
  if(sessionStorage.getItem('cookieState') == null){
    cookiePopup.classList.add('active');
  } else if(sessionStorage.getItem('cookieState') == 'accepted' || sessionStorage.getItem('cookieState') == 'denied'){
    cookiePopup.classList.remove('active');
  }
  pfelHover();
}
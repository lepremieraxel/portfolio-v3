const allSpanFr = document.querySelectorAll('[lang="fr"]');
const allSpanEn = document.querySelectorAll('[lang="en"]');
const html = document.querySelector('html');
const langBtnArr = document.querySelectorAll('#lang');

window.onload = () => {
  sessionStorage.setItem('lang', navigator.language);
  switch(sessionStorage.getItem('lang')){
    case 'fr':
      html.lang = 'fr';
      allSpanEn.forEach(spanEn => {
        spanEn.style.display = 'none';
      });
      break;
    case 'en':
      html.lang = 'en';
      allSpanFr.forEach(spanFr => {
        spanFr.style.display = 'none';
      })
      break;
    default:
      html.lang = 'en';
      allSpanFr.forEach(spanFr => {
        spanFr.style.display = 'none';
      })
      break;
  }
}

langBtnArr.forEach(langBtn => {
  langBtn.onclick = () => {
    console.log(sessionStorage.getItem('lang'));
    switch(sessionStorage.getItem('lang')){
      case 'fr':
        html.lang = 'en';
        allSpanEn.forEach(spanEn => {
          spanEn.style.display = 'inline';
        });
        allSpanFr.forEach(spanFr => {
          spanFr.style.display = 'none';
        });
        sessionStorage.setItem('lang','en');
        break;
      case 'en':
        html.lang = 'fr';
        allSpanFr.forEach(spanFr => {
          spanFr.style.display = 'inline';
        });
        allSpanEn.forEach(spanEn => {
          spanEn.style.display = 'none';
        });
        sessionStorage.setItem('lang','fr');
        break;
      default:
        html.lang = 'en';
        allSpanFr.forEach(spanFr => {
          spanFr.style.display = 'none';
        });
        allSpanEn.forEach(spanEn => {
          spanEn.style.display = 'inline';
        });
        sessionStorage.setItem('lang','en');
        break;
    }
  }
}); 
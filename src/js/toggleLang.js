const html = document.querySelector('html');
const french = 'fr';
const english = 'en';
const defaultLang = english;
const englishTogglePos = '.25rem';
const frenchTogglePos = '2.75rem';

const langBtnArr = document.querySelectorAll('.lang');
const langToggleBtn = document.querySelector('.lang .toggle-btn');

const allFrench = document.querySelectorAll('[lang="fr"]');
const allEnglish = document.querySelectorAll('[lang="en"]');

initLang();

function initLang(){
  let storedLang = sessionStorage.getItem('lang');
  if(!storedLang){
    storedLang = defaultLang;
    sessionStorage.setItem('lang', defaultLang);
  }
  setLang(storedLang);
}

function setLang(lang = defaultLang){
  if(lang === french){
    allEnglish.forEach(englishEl => {
      englishEl.style.display = 'none';
    });
    allFrench.forEach(frenchEl => {
      frenchEl.style.display = 'inline';
    });
    html.setAttribute('lang', 'fr');
    langToggleBtn.style.right = frenchTogglePos;
  } else if(lang === english){
    allEnglish.forEach(englishEl => {
      englishEl.style.display = 'inline';
    });
    allFrench.forEach(frenchEl => {
      frenchEl.style.display = 'none';
    });
    html.setAttribute('lang', 'en');
    langToggleBtn.style.right = englishTogglePos;
  }
}

langBtnArr.forEach(langBtn => {
  langBtn.addEventListener('click', function () {
    let lang = sessionStorage.getItem('lang');
    if(lang){
      let newLang = lang == french ? english : french;
      setLang(newLang);
      sessionStorage.setItem('lang', newLang);
    }
  });
});
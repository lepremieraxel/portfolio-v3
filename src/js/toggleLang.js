// const allSpanFr = document.querySelectorAll('[lang="fr"]');
// const allSpanEn = document.querySelectorAll('[lang="en"]');
// const html = document.querySelector('html');
// const langBtnArr = document.querySelectorAll('#lang');
// const langBtnLetter = document.querySelector('#lang .toggle-btn');

// window.onload = () => {
//   sessionStorage.setItem('lang', 'en');
//   html.lang = 'en';
//   allSpanEn.forEach(spanEn => {
//     spanEn.style.display = 'inline';
//   });
//   allSpanFr.forEach(spanFr => {
//     spanFr.style.display = 'none';
//   });
// }

// langBtnArr.forEach(langBtn => {
//   langBtn.onclick = () => {
//     console.log(sessionStorage.getItem('lang'));
//     switch(sessionStorage.getItem('lang')){
//       case 'fr':
//         html.lang = 'en';
//         allSpanEn.forEach(spanEn => {
//           spanEn.style.display = 'inline';
//         });
//         allSpanFr.forEach(spanFr => {
//           spanFr.style.display = 'none';
//         });
//         sessionStorage.setItem('lang','en');
//         langBtnLetter.innerText = 'EN';
//       langBtnLetter.parentElement.style.justifyContent = 'end';
//       break;
//       case 'en':
//         html.lang = 'fr';
//         allSpanFr.forEach(spanFr => {
//           spanFr.style.display = 'inline';
//         });
//         allSpanEn.forEach(spanEn => {
//           spanEn.style.display = 'none';
//         });
//         sessionStorage.setItem('lang','fr');
//       langBtnLetter.innerText = 'FR';
//       langBtnLetter.parentElement.style.justifyContent = 'start';
//       break;
//       default:
//         html.lang = 'en';
//         allSpanFr.forEach(spanFr => {
//           spanFr.style.display = 'none';
//         });
//         allSpanEn.forEach(spanEn => {
//           spanEn.style.display = 'inline';
//         });
//         sessionStorage.setItem('lang','en');
//       langBtnLetter.innerText = 'EN';
//       langBtnLetter.parentElement.style.justifyContent = 'end';
//       break;
//     }
//   }
// }); 


const french = 'fr';
const english = 'en';
const defaultLang = english;
const englishTogglePos = '.25rem';
const frenchTogglePos = '2.75rem';

const langBtnArr = document.querySelectorAll('#lang');
const langToggleBtn = document.querySelector('#lang .toggle-btn');

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
    langToggleBtn.style.right = frenchTogglePos;
  } else if(lang === english){
    allEnglish.forEach(englishEl => {
      englishEl.style.display = 'inline';
    });
    allFrench.forEach(frenchEl => {
      frenchEl.style.display = 'none';
    });
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
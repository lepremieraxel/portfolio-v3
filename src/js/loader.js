const loaderContainer = document.querySelector('.loader');

sessionStorage.setItem('isFirstTime', true);

if(sessionStorage.getItem('isFirstTime') == true){
    loaderContainer.style.left = '-100%';
    setTimeout(() => {
      let i = 0;
      let interval = setInterval(() => {
        i++;
        if(i >= 100){
          clearInterval(interval);
        }
        loaderContainer.children[1].children[0].textContent = `LOADING ${i}%`;
      }, 20);
    }, 500);
    setTimeout(() => {
      loaderContainer.style.left = '-300%';
    }, 3000);
    sessionStorage.setItem('isFirstTime', false);
} else {
  loaderContainer.style.left = '-300%';
}
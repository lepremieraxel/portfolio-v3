const loaderContainer = document.querySelector('.loader');

window.onload = () => {
  if(sessionStorage.getItem('lastPage') == ''){
    loaderContainer.style.left = '-100%';
    let i = 0;
    let interval = setInterval(() => {
      i++;
      if(i >= 100){
        clearInterval(interval);
      }
      loaderContainer.children[1].children[0].textContent = `LOADING ${i}%`;
    }, 30);
    setTimeout(() => {
      loaderContainer.style.left = '-300%';
    }, 4000);
  } else {
    loaderContainer.style.left = '100%';
  }
}
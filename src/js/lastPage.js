const menuItem = document.querySelectorAll('.menu-item');
menuItem.forEach(item => {
  item.addEventListener('click', () => {
    sessionStorage.setItem('lastPage', item.href);
  })
});
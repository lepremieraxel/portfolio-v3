const body = document.querySelector('body');
const toggleBtnArr = document.querySelectorAll('#theme');
const toggleBtnSvg = document.querySelector('#theme .toggle-btn');
const toggleBtnText = document.querySelector('button#theme');

window.onload = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-theme');
    toggleBtnSvg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.3807 2.01904C9.91573 3.38786 9 5.33708 9 7.50018C9 11.6423 12.3579 15.0002 16.5 15.0002C18.6631 15.0002 20.6123 14.0844 21.9811 12.6195C21.6613 17.8539 17.3149 22.0002 12 22.0002C6.47715 22.0002 2 17.523 2 12.0002C2 6.68532 6.14629 2.33888 11.3807 2.01904Z"></path></svg>';
    toggleBtnSvg.parentElement.style.justifyContent = 'start';
    toggleBtnText.children[0].innerText = 'SWITCH TO LIGHT';
    toggleBtnText.children[1].innerText = 'MODE CLAIR';
    sessionStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    toggleBtnSvg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>';
    toggleBtnSvg.parentElement.style.justifyContent = 'end';
    toggleBtnText.children[0].innerText = 'SWITCH TO DARK';
    toggleBtnText.children[1].innerText = 'MODE SOMBRE';
    sessionStorage.setItem('theme', 'light');
  }
  if(sessionStorage.getItem('theme') == "light"){
    body.classList.remove('dark-theme');
    toggleBtnSvg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>';
    toggleBtnSvg.parentElement.style.justifyContent = 'end';
    toggleBtnText.children[0].innerText = 'SWITCH TO DARK';
    toggleBtnText.children[1].innerText = 'MODE SOMBRE';
    sessionStorage.setItem('theme', 'light');
  } else {
    if(sessionStorage.getItem('theme') == "dark"){
      body.classList.add('dark-theme');
      toggleBtnSvg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.3807 2.01904C9.91573 3.38786 9 5.33708 9 7.50018C9 11.6423 12.3579 15.0002 16.5 15.0002C18.6631 15.0002 20.6123 14.0844 21.9811 12.6195C21.6613 17.8539 17.3149 22.0002 12 22.0002C6.47715 22.0002 2 17.523 2 12.0002C2 6.68532 6.14629 2.33888 11.3807 2.01904Z"></path></svg>';
      toggleBtnSvg.parentElement.style.justifyContent = 'start';
      toggleBtnText.children[0].innerText = 'SWITCH TO LIGHT';
      toggleBtnText.children[1].innerText = 'MODE CLAIR';
      sessionStorage.setItem('theme', 'dark');
    }
  }
}

toggleBtnArr.forEach(toggleBtn => {
  toggleBtn.onclick = () => {
    if(sessionStorage.getItem('theme') == 'dark'){
      body.classList.remove('dark-theme');
      toggleBtnSvg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>';
      toggleBtnSvg.parentElement.style.justifyContent = 'end';
      toggleBtnText.children[0].innerText = 'SWITCH TO DARK';
      toggleBtnText.children[1].innerText = 'MODE SOMBRE';
      sessionStorage.setItem('theme', 'light');
    } else {
      if(sessionStorage.getItem('theme') == "light"){
        body.classList.add('dark-theme');
        toggleBtnSvg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.3807 2.01904C9.91573 3.38786 9 5.33708 9 7.50018C9 11.6423 12.3579 15.0002 16.5 15.0002C18.6631 15.0002 20.6123 14.0844 21.9811 12.6195C21.6613 17.8539 17.3149 22.0002 12 22.0002C6.47715 22.0002 2 17.523 2 12.0002C2 6.68532 6.14629 2.33888 11.3807 2.01904Z"></path></svg>';
        toggleBtnSvg.parentElement.style.justifyContent = 'start';
        toggleBtnText.children[0].innerText = 'SWITCH TO LIGHT';
        toggleBtnText.children[1].innerText = 'MODE CLAIR';
        sessionStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark-theme');
        toggleBtnSvg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>';
        toggleBtnSvg.parentElement.style.justifyContent = 'end';
        toggleBtnText.children[0].innerText = 'SWITCH TO DARK';
        toggleBtnText.children[1].innerText = 'MODE SOMBRE';
        sessionStorage.setItem('theme', 'light');
      }
    }
  }
});

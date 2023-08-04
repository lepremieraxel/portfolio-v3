const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursor.style.left = `${posX}px`;
  cursor.style.top = `${posY}px`;
  cursor.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 200, fill: "forwards" });
});

const toggleBtns = document.querySelectorAll('.toggle');
toggleBtns.forEach(toggleBtn => {
  toggleBtn.addEventListener('mouseover', () => {
    cursor.style.width = '3rem';
    cursor.style.height = '3rem';
  })
  toggleBtn.addEventListener('mouseleave', () => {
    cursor.style.width = '1rem';
    cursor.style.height = '1rem';
  })
});

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(menuItem => {
  menuItem.addEventListener('mouseover', () => {
    cursor.style.width = '3rem';
    cursor.style.height = '3rem';
  })
  menuItem.addEventListener('mouseleave', () => {
    cursor.style.width = '1rem';
    cursor.style.height = '1rem';
  })
});

const ctas = document.querySelectorAll('.cta');
ctas.forEach(cta => {
  cta.addEventListener('mouseover', () => {
    let infos = cta.getBoundingClientRect();
    cursor.style.width = infos.width+'px';
    cursor.style.height = infos.height+'px';
  })
  cta.addEventListener('mouseleave', () => {
    cursor.style.width = '1rem';
    cursor.style.height = '1rem';
  })
});

const links = document.querySelectorAll('.link');
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    let infos = link.getBoundingClientRect();
    cursor.style.width = infos.width+10+'px';
    cursor.style.height = infos.height+5+'px';
  })
  link.addEventListener('mouseleave', () => {
    cursor.style.width = '1rem';
    cursor.style.height = '1rem';
  })
});

const catSelectors = document.querySelectorAll('.category-selector p');
catSelectors.forEach(selector => {
  selector.addEventListener('mouseover', () => {
    let infos = selector.getBoundingClientRect();
    cursor.style.width = infos.width+10+'px';
    cursor.style.height = infos.height+5+'px';
  })
  selector.addEventListener('mouseleave', () => {
    cursor.style.width = '1rem';
    cursor.style.height = '1rem';
  })
});

const inputs = document.querySelectorAll('.input');
inputs.forEach(input => {
  input.addEventListener('mouseover', () => {
    cursor.style.width = ".2rem";
    cursor.style.height = "1.2rem";
  })
  input.addEventListener('mouseleave', () => {
    cursor.style.width = "1rem";
    cursor.style.height = "1rem";
  })
})

const portfolioEl = document.querySelectorAll('.pf-el');
portfolioEl.forEach(portfolio => {
  portfolio.addEventListener('mouseover', () => {
    const text1 = document.createElement('p');
    text1.classList.add('cursor-inner');
    text1.textContent = portfolio.getAttribute('data-portfolio-title');
    cursor.appendChild(text1);
  
    const text2 = document.createElement('p');
    text2.classList.add('cursor-inner');
    text2.textContent = portfolio.getAttribute('data-portfolio-year');
    cursor.appendChild(text2);
  
    const actualLang = sessionStorage.getItem('lang');
    const text3 = document.createElement('p');
    text3.classList.add('cursor-inner');
    text3.classList.add('cursor-small');
  
    const t3span1 = document.createElement('span');
    t3span1.textContent = 'CLICK TO SEE MORE';
    t3span1.setAttribute('lang', 'en');
    if(actualLang === 'fr'){
      t3span1.style.display = 'none';
    }
    text3.appendChild(t3span1);
  
    const t3span2 = document.createElement('span');
    t3span2.textContent = 'CLIQUER POUR VOIR PLUS';
    t3span2.setAttribute('lang', 'fr');
    if(actualLang === 'en'){
      t3span2.style.display = 'none';
    }
    text3.appendChild(t3span2);
  
    cursor.appendChild(text3);
  
    cursor.classList.add('portfolio-hover');
  })
  portfolio.addEventListener('mouseleave', () => {
    const textToDelete = document.querySelectorAll('.cursor-inner');
    textToDelete.forEach(text => {
      cursor.removeChild(text);
    });
    cursor.classList.remove('portfolio-hover');
  })
});

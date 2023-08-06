const userAgent = navigator.userAgent.toLowerCase();
const isMobile = /iPhone|Android/i.test(navigator.userAgent);
const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);

const cursor = document.querySelector('.cursor');

if(isMobile || isTablet){
  cursor.style.display = 'none';
}

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

function ctaHover(){
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
}
ctaHover();

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

const nextPrevBtn = document.querySelectorAll('.next-prev-btn');
nextPrevBtn.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    let infos = btn.getBoundingClientRect();
    cursor.style.width = infos.width+'px';
    cursor.style.height = infos.height+'px';
  })
  btn.addEventListener('mouseleave', () => {
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

function pfelHover(){
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
}
window.onload = () => {
  pfelHover();
}

const previous = document.querySelector('.click-area.previous');
previous.addEventListener('mouseover', () => {
  cursor.classList.add('galery-hover');
  cursor.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>';
});
previous.addEventListener('mouseleave', () => {
  cursor.classList.remove('galery-hover');
  cursor.innerHTML = '';
})

const next = document.querySelector('.click-area.next');
next.addEventListener('mouseover', () => {
  cursor.classList.add('galery-hover');
  cursor.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>';
});
next.addEventListener('mouseleave', () => {
  cursor.classList.remove('galery-hover');
  cursor.innerHTML = '';
})
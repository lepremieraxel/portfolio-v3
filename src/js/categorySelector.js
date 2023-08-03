const allSelectorEl = document.querySelectorAll('.category-selector p');

const allPortfolioEl = document.querySelectorAll('.portfolio-el');

const allCat = "all";
const websiteCat = "website";
const designCat = "design";


function select(cat = allCat){
  switch(cat){
    case websiteCat:
      allPortfolioEl.forEach(portfolioEl => {
        if(portfolioEl.getAttribute('data-cat') === websiteCat){
          portfolioEl.style.display = 'flex';
        } else {
          portfolioEl.style.display = 'none';
        }
      });
      allSelectorEl.forEach(selectorEl => {
        selectorEl.classList.remove('active');
      });
      allSelectorEl[1].classList.add('active');
      break;
    case designCat:
      allPortfolioEl.forEach(portfolioEl => {
        if(portfolioEl.getAttribute('data-cat') === designCat){
          portfolioEl.style.display = 'flex';
        } else {
          portfolioEl.style.display = 'none';
        }
      });
      allSelectorEl.forEach(selectorEl => {
        selectorEl.classList.remove('active');
      });
      allSelectorEl[2].classList.add('active');
      break;
    case allCat:
      allPortfolioEl.forEach(portfolioEl => {
        portfolioEl.style.display = 'flex';
      });
      allSelectorEl.forEach(selectorEl => {
        selectorEl.classList.remove('active');
      });
      allSelectorEl[0].classList.add('active');
      break;
    default:
    allPortfolioEl.forEach(portfolioEl => {
      portfolioEl.style.display = 'flex';
    });
    allSelectorEl.forEach(selectorEl => {
      selectorEl.classList.remove('active');
    });
    allSelectorEl[0].classList.add('active');
    break;
  }
}

allSelectorEl.forEach(selectorEl => {
  selectorEl.addEventListener('click', function () {
    let dataSelect = selectorEl.getAttribute('data-select');
    select(dataSelect);
  })
})
const dataFile = "/src/data/portfolio.json";
const portfolioContainer = document.querySelector('.portfolio-container');

const rawFile = new XMLHttpRequest();
rawFile.overrideMimeType("application/json");
rawFile.open("GET", dataFile, true);
rawFile.onreadystatechange = function () {
  if(rawFile.readyState === 4 && rawFile.status == '200'){
    const rawData = JSON.parse(rawFile.responseText);
    rawData.forEach(data => {
      let portfolioEl = document.createElement('article');
      portfolioEl.classList.add('portfolio-el');
      portfolioEl.classList.add('pf-el');
      portfolioEl.setAttribute('data-cat', data.type);
      portfolioEl.setAttribute('data-portfolio-title', data.title);
      let year = data.date.split(' ');
      portfolioEl.setAttribute('data-portfolio-year', year[1]);
      
      let portfolioElLink = document.createElement('a');
      let newTitle = data.title.split(' ');
      newTitle = newTitle.join('-').toLowerCase();
      portfolioElLink.href = `/src/pages/page.html?id=${data.id}&t=${newTitle}`;

      let portfolioElImg = document.createElement('img');
      portfolioElImg.src = `/assets/portfolio/${data.mainImg}`;
      portfolioElImg.alt = `image de presentation de ${data.title}`;

      let portfolioElInfo = document.createElement('p');
      portfolioElInfo.classList.add('info');
      portfolioElInfo.textContent = `${data.title} - ${year[1]}`;

      portfolioEl.appendChild(portfolioElLink);
      portfolioEl.appendChild(portfolioElImg);
      portfolioEl.appendChild(portfolioElInfo);
      portfolioContainer.appendChild(portfolioEl);
    });
    // console.log(rawData);
  }
}
rawFile.send(null);

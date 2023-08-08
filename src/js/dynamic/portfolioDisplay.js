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
      portfolioElLink.href = `/${data.id}/${newTitle}/`;
      portfolioEl.appendChild(portfolioElLink);

      let type = data.mainImg.split('.')[1];
      if(type == 'png' || type == 'jpg' || type == 'jpeg' || type == 'gif' || type == 'svg' || type == 'webp'){
        let portfolioElImg = document.createElement('img');
        portfolioElImg.src = `/assets/portfolio/${data.mainImg}`;
        portfolioElImg.alt = data.title;
        portfolioEl.appendChild(portfolioElImg);
      } else if(type == 'mp4' || type == 'mov' || type == 'avi' || type == 'webm'){
        let portfolioElVid = document.createElement('video');
        portfolioElVid.src = `/assets/portfolio/${data.mainImg}`;
        portfolioElVid.playsInline = true;
        portfolioElVid.autoplay = true;
        portfolioElVid.muted = true;
        portfolioElVid.loop = true;
        portfolioEl.appendChild(portfolioElVid);
      }

      let portfolioElInfo = document.createElement('p');
      portfolioElInfo.classList.add('info');
      portfolioElInfo.textContent = `${data.title} - ${year[1]}`;
      portfolioEl.appendChild(portfolioElInfo);

      portfolioContainer.appendChild(portfolioEl);
    });
  }
}
rawFile.send(null);

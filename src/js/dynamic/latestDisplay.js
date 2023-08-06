const latestLink = document.querySelector('.latest-container a');
const latestImg = document.querySelector('.latest-container img');

const dataFile = '/src/data/portfolio.json';

const rawFile = new XMLHttpRequest();
rawFile.overrideMimeType("application/json");
rawFile.open("GET", dataFile, true);
rawFile.onreadystatechange = function () {
  if(rawFile.readyState === 4 && rawFile.status == '200'){
    const rawData = JSON.parse(rawFile.responseText);
    const data = rawData[0];
    let newTitle = data.title.split(' ');
    newTitle = newTitle.join('-').toLowerCase();
    latestLink.href = `/src/pages/page.html?id=${data.id}&t=${newTitle}`;
    latestImg.src = `/assets/portfolio/${data.mainImg}`;
    latestImg.setAttribute('data-portfolio-title', data.title);
    let year = data.date.split(' ');
    latestImg.setAttribute('data-portfolio-year', year[1]);
    // console.log(rawData);
  }
}
rawFile.send(null);

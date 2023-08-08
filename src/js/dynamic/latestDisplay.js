const latestLink = document.querySelector('.latest-container a');

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
    latestLink.href = `/${data.id}/${newTitle}/`;
    let type = data.mainImg.split('.')[1];
    if(type == 'png' || type == 'jpg' || type == 'jpeg' || type == 'gif' || type == 'svg' || type == 'webp'){
      let latestImg = document.createElement('img');
      latestImg.classList.add('pf-el');
      latestImg.src = `/assets/portfolio/${data.mainImg}`;
      latestImg.alt = data.title;
      let year = data.date.split(' ');
      latestImg.setAttribute('data-portfolio-year', year[1]);
      latestImg.setAttribute('data-portfolio-title', data.title);
      latestLink.appendChild(latestImg);
    } else if(type == 'mp4' || type == 'mov' || type == 'avi' || type == 'webm'){
      let latestVid = document.createElement('video');
      latestVid.classList.add('pf-el');
      latestVid.src = `/assets/portfolio/${data.mainImg}`;
      latestVid.playsInline = true;
      latestVid.autoplay = true;
      latestVid.muted = true;
      latestVid.loop = true;
      let year = data.date.split(' ');
      latestVid.setAttribute('data-portfolio-year', year[1]);
      latestVid.setAttribute('data-portfolio-title', data.title);
      latestLink.appendChild(latestVid);
    }

  }
}
rawFile.send(null);

const dataFile = "/src/data/portfolio.json";
const pageContainer = document.querySelector('main.page');
const topPageContainer = document.querySelector('.top-page-container');
const galeryContainer = document.querySelector('.galery-slider');

const rawFile = new XMLHttpRequest();
rawFile.overrideMimeType("application/json");
rawFile.open("GET", dataFile, true);
rawFile.onreadystatechange = function () {
  if(rawFile.readyState === 4 && rawFile.status == '200'){
    const rawData = JSON.parse(rawFile.responseText);
    let id = window.location.href.split('/')[3];
    let newId = 0;
    rawData.forEach(data => {
      if(data.id == id){
        const pageTitle = document.createElement('h2');
        pageTitle.textContent = data.title;
        pageContainer.insertBefore(pageTitle, topPageContainer);

        let type = data.mainImg.split('.')[1];
        if(type == 'png' || type == 'jpg' || type == 'jpeg' || type == 'gif' || type == 'svg' || type == 'webp'){
          const mainImg = document.createElement('img');
          mainImg.src = `/assets/portfolio/${data.mainImg}`;
          mainImg.alt = data.title;
          topPageContainer.appendChild(mainImg);
        } else if(type == 'mp4' || type == 'mov' || type == 'avi' || type == 'webm'){
          const mainVid = document.createElement('video');
          mainVid.src = `/assets/portfolio/${data.mainImg}`;
          mainVid.playsInline = true;
          mainVid.autoplay = true;
          mainVid.muted = true;
          mainVid.loop = true;
          topPageContainer.appendChild(mainVid);
        }

        const infosContainer = document.createElement('div');
        infosContainer.classList.add('infos-container');
        const infosUl = document.createElement('ul');

        const infosLiDate = document.createElement('li');
        infosLiDate.textContent = data.date;
        infosUl.appendChild(infosLiDate);

        const infosLiWhat1 = document.createElement('li');
        infosLiWhat1.textContent = data.what1;
        infosUl.appendChild(infosLiWhat1);

        const infosLiWhat2 = document.createElement('li');
        infosLiWhat2.textContent = data.what2;
        infosUl.appendChild(infosLiWhat2);

        const infosLiWho = document.createElement('li');
        infosLiWho.textContent = data.who;
        infosUl.appendChild(infosLiWho);

        infosContainer.appendChild(infosUl);

        const visitBtn = document.createElement('a');
        visitBtn.classList.add('cta');
        visitBtn.textContent = 'VISIT';
        visitBtn.href = data.link;
        visitBtn.target = '_blank';
        infosContainer.appendChild(visitBtn);

        topPageContainer.appendChild(infosContainer);

        const text = document.createElement('p');
        text.textContent = data.text;
        topPageContainer.appendChild(text);

        const galery = data.galery;
        const galeryIndicator = document.querySelector('.galery-pos-indicator');
        let isFirst = true;
        let galeryId = 1;
        galery.forEach(item => {
          let type = item.split('.')[1];
          if(type == 'png' || type == 'jpg' || type == 'jpeg' || type == 'gif' || type == 'svg' || type == 'webp'){
            const img = document.createElement('img');
            img.classList.add('galery-item');
            img.src = `/assets/portfolio/${item}`;
            img.alt = data.title;
            img.setAttribute('id', galeryId);
            galeryContainer.appendChild(img);
          } else if(type == 'mp4' || type == 'mov' || type == 'avi' || type == 'webm'){
            const video = document.createElement('video');
            video.classList.add('galery-item');
            video.src = `/assets/portfolio/${item}`;
            video.playsInline = true;
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.setAttribute('id', galeryId);
            galeryContainer.appendChild(video);
          }
          galeryId++;
          const span = document.createElement('span');
          if(isFirst){
            span.classList.add('active');
          }
          galeryIndicator.appendChild(span);
          isFirst = false;
        })

        const prevNextContainer = document.querySelector('.prev-next-container');
        const prevBtn = prevNextContainer.children[0];
        const nextBtn = prevNextContainer.children[1];
        if(newId > 0){
          let prevTitle = rawData[newId-1].title.toLowerCase().split(' ').join('-');
          prevBtn.href = `/${rawData[newId-1].id}/${prevTitle}/`;
        } else if(newId == 0){
          let prevTitle = rawData[rawData.length-1].title.toLowerCase().split(' ').join('-');
          prevBtn.href = `/${rawData[rawData.length-1].id}/${prevTitle}/`;
        }

        if(newId < rawData.length-1){
          let nextTitle = rawData[newId+1].title.toLowerCase().split(' ').join('-');
          nextBtn.href = `/${rawData[newId+1].id}/${nextTitle}/`;
        } else if(newId == rawData.length-1){
          let nextTitle = rawData[0].title.toLowerCase().split(' ').join('-');
          nextBtn.href = `/${rawData[0].id}/${nextTitle}/`;
        }
        ctaHover();
      }
      newId++;
    });
  }
}
rawFile.send(null);
const nextClickArea = document.querySelector('.click-area.next');
const prevClickArea = document.querySelector('.click-area.previous');

let actualId = 1;

nextClickArea.onclick = () => {
  const posIndicator = document.querySelectorAll('.galery-pos-indicator span');
  const galeryItems = document.querySelectorAll('.galery-item');
  if(actualId < galeryItems.length){
    galeryItems.forEach(item => {
      item.style.transform = `translateX(-${actualId}00%)`;
    })
    posIndicator[actualId-1].classList.remove('active');
    posIndicator[actualId].classList.add('active');
  } else {
    posIndicator[actualId-1].classList.remove('active');
    actualId = 0;
    posIndicator[actualId].classList.add('active');
    galeryItems.forEach(item => {
      item.style.transform = `translateX(0)`;
    })
  }
  actualId++;
}

prevClickArea.onclick = () => {
  const galeryItems = document.querySelectorAll('.galery-item');
  const posIndicator = document.querySelectorAll('.galery-pos-indicator span');
  if(actualId > 1){
    galeryItems.forEach(item => {
      item.style.transform = `translateX(-${actualId-2}00%)`;
    })
    posIndicator[actualId-1].classList.remove('active');
    actualId--;
    posIndicator[actualId-1].classList.add('active');
  } else if(actualId == 1){
    posIndicator[actualId-1].classList.remove('active');
    actualId = galeryItems.length;
    posIndicator[actualId-1].classList.add('active');
    galeryItems.forEach(item => {
      item.style.transform = `translateX(-${actualId-1}00%)`;
    })
  }
}
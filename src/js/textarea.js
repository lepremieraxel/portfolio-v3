const textareas = document.querySelectorAll('textarea');
const spanNbCharacters = document.querySelector('.nb-characters');
textareas.forEach(el => {
  el.addEventListener('input', () => {
    let scroll_height = el.scrollHeight;
    el.style.height = scroll_height + 'px';
    let textareaCount = el.value.length;
    spanNbCharacters.textContent = textareaCount;
    if(textareaCount == 1000){
      spanNbCharacters.parentElement.style.color = 'var(--red)';
    } else {
      spanNbCharacters.parentElement.style.color = 'var(--secondary-color)';
    }
  });
});

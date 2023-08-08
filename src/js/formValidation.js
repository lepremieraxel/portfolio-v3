const form = document.contactForm;
const nameInput = form.name;
const emailInput = form.email;
const messageInput = form.message;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const charactersCount = document.querySelector('.characters-count');
const sendBtn = form.send;

let isNameValid = false;
let isEmailValid = false;
let isMessageValid = false;

function nameValidation(){
  const nameValue = form.name.value;
  if(nameValue.length >= 3 && nameValue.length <= 30){
    nameInput.style.borderColor = 'var(--secondary-color)';
    isNameValid = true;
  } else {
    nameInput.style.borderColor = 'var(--red)';
    isNameValid = false;
  }
}

function emailValidation(){
  const emailValue = form.email.value;
  if(emailRegex.test(emailValue)){
    emailInput.style.borderColor = 'var(--secondary-color)';
    isEmailValid = true;
  } else {
    emailInput.style.borderColor = 'var(--red)';
    isEmailValid = false;
  }
  return isEmailValid
}

function messageValidation(){
  const messageValue = form.message.value;
  if(messageValue.length >= 1 && messageValue.length <= 1000){
    messageInput.style.borderColor = 'var(--secondary-color)';
    charactersCount.style.color = 'var(--secondary-color)';
    isMessageValid = true;
  } else {
    messageInput.style.borderColor = 'var(--red)';
    charactersCount.style.color = 'var(--red)';
    isMessageValid = false;
  }
}

form.oninput = () => {
  nameValidation();
  emailValidation();
  messageValidation();
  if(isNameValid && isEmailValid && isMessageValid){
    sendBtn.classList.remove('disabled');
  } else {
    sendBtn.classList.add('disabled');
  }
}

form.onsubmit = (e) => {
  e.preventDefault();
  if(isNameValid && isEmailValid && isMessageValid){
    window.fetch(form.action, {
      method: "post",
      body: new URLSearchParams(new FormData(form))
    }).then(response => response.json())
    .then(data => {
      if(data['state'] == "sent"){
        sendBtn.children[0].textContent = "MESSAGE ENVOYÉ";
        sendBtn.children[1].textContent = "MESSAGE SENT";
      } else {
        sendBtn.children[0].textContent = "ERREUR";
        sendBtn.children[1].textContent = "ERROR";
      }
    })
  }
}
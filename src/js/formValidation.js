const form = document.contactForm;
const nameInput = form.name;
const emailInput = form.email;
const messageInput = form.message;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const charactersCount = document.querySelector('.characters-count');

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

const sendBtn = form.send;
sendBtn.addEventListener("submit", function (e) {
  e.preventDefaut();
})

form.oninput = () => {
  nameValidation();
  emailValidation();
  messageValidation();
}

if(isNameValid && isEmailValid && isMessageValid){
  sendBtn.classList.remove('disabled');
  const params = {
    method: 'post',
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    }),
    headers: {"Content-Type": "application/json"}
  };
  form.onsubmit = (e) => {
    window.fetch('/src/php/sendForm.php', params)
    .then(response => response.json())
    .then(data => {
      if(data['state'] == 'mail_sent'){
        alert('mail envoyé.')
      } else {
        alert('error');
      }
    })
    e.preventDefault();
  }
} else {
  sendBtn.classList.add('disabled');
}
const textElement = document.getElementById("typing-text")
const text = "Oi, eu sou Pedro 😁"

let index = 0;

function typeText(){
    textElement.textContent += text[index];
    index++;

    if (index >= text.length){
        clearInterval(interval)
    }
}
const typingSpeed = 100;

const interval = setInterval(typeText, typingSpeed);

let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Não vá embora 😢";
  })
  window.addEventListener("focus", () => {
    document.title = docTitle;
  }) 

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const body = document.body;

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active")
    body.classList.toggle("no-scroll");
  });
  
  function copyToClipboard() {
    //Texto
    const textToCopy = 'pevimarques@gmail.com';

    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis

    document.execCommand('copy');

    
    document.body.removeChild(tempInput);

    const copyButton = document.getElementById('copy-button');
    const tooltip = copyButton.querySelector('.tooltip');
    const clipboardIcon = copyButton.querySelector('.clipboard');
    const checkmarkIcon = copyButton.querySelector('.checkmark');
    
    tooltip.setAttribute('data-text-end', 'Copied!');
    clipboardIcon.style.display = 'none';
    checkmarkIcon.style.display = 'block';

    setTimeout(() => {
      tooltip.setAttribute('data-text-end', 'Copy to clipboard');
      clipboardIcon.style.display = 'block';
      checkmarkIcon.style.display = 'none';
    }, 2000);
  }





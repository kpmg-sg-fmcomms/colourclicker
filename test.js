function changeColor() {
  const body = document.querySelector('body');
  body.classList.toggle('red');
}

document.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const changeColorButton = document.querySelector('.change-color');
let colorValue;

changeColorButton.addEventListener('click', () => {
  colorValue = getRandomHexColor();
  body.style.backgroundColor = colorValue;
  colorValue.textContent = colorValue;
})

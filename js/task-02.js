const list = document.querySelector('ul');

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


list.append(...ingredients.map(ingred => { 
const ingredLi = document.createElement('li');
ingredLi.classList.add('item');
ingredLi.textContent = ingred; return ingredLi; 
}))

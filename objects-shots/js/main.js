//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const input = document.querySelector('input');
const button = document.querySelector('button');
const image = document.querySelector('img');
const title = document.querySelector('h2');
const instructions = document.querySelector('h3');
const carousel = document.querySelector('.carousel');

const cocktails = {};

/*
function getCocktail() {
  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`;
  let response;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.drinks[0]);
      title.innerHTML = `Drink: ${
        data.drinks[Math.trunc(Math.random() * data.drinks.length)].strDrink
      }`;
      instructions.innerHTML =
        data.drinks[
          Math.trunc(Math.random() * data.drinks.length)
        ].strInstructions;
      image.src =
        data.drinks[
          Math.trunc(Math.random() * data.drinks.length)
        ].strDrinkThumb;
    })
    .catch(err => console.log(err));
}
*/

function getCocktail() {
  carousel.innerHTML = '';
  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value.replace(
    /[^a-zA-Z]/g,
    ''
  )}`;
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      data.drinks.map(drink => {
        carousel.innerHTML += `  <div class="container">
                                    <h2>${drink.strDrink}</h2>
                                    <img src=${drink.strDrinkThumb} />
                                    <ul class="list">
                                        <li>${drink.strIngredient1}</li>
                                        <li>${drink.strIngredient2}</li>
                                        <li>${drink.strIngredient3 || ''}</li>
                                        <li>${drink.strIngredient4 || ''}</li>
                                        <li>${drink.strIngredient5 || ''}</li>
                                    </ul>
                                    <p>${drink.strInstructions}</p>
                                </div>`;
      });
    })
    .catch(err => console.log(err));
}

button.addEventListener('click', getCocktail);

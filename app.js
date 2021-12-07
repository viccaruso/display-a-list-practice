// Imports
import flavors from './polar-flavors-data.js';
import { renderPolarFlavor } from './polar-flavors-render.js';
import cities from './oregon-cities-data.js';
import { renderOregonCities } from './oregon-cities-render.js';
import pets from './pets-data.js';
import { renderPets } from './pets-render.js';
import books from './books-data.js';
import { renderBooks } from './books-render.js';

// Grab DOM elements
const flavorsDivEl = document.querySelector('#polar-flavors');
const oregonCitiesEl = document.querySelector('#oregon-cities');
const petsEl = document.querySelector('#pets');
const booksEl = document.querySelector('#books');

// Loop through data and render each item in data
// Polar Flavors (array)
for (let flavor of flavors) {
    const flavorEl = renderPolarFlavor(flavor);
    flavorsDivEl.append(flavorEl);
}
// 5 Largest Cities in Oregon by Population (object)
for (let city of cities) {
    const cityEl = renderOregonCities(city);
    oregonCitiesEl.append(cityEl);
}

// Pets (object with nested array)
for (let pet of pets) {
    const petEl = renderPets(pet);
    petsEl.append(petEl);
}

// Books (object with nested object)
for (let book of books) {
    const bookEl = renderBooks(book);
    booksEl.append(bookEl);
}

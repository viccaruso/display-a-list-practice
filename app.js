// Imports
import flavors from './polar-flavors-data.js';
import { renderPolarFlavor } from './polar-flavors-render.js';
import cities from './oregon-cities-data.js';
import { renderOregonCities } from './oregon-cities-render.js';
import pets from './pets-data.js';
import { renderPets } from './pets-render.js';

// Grab DOM elements
const flavorsDivEl = document.querySelector('#polar-flavors');
const oregonCitiesEl = document.querySelector('#oregon-cities');
const petsEl = document.querySelector('#pets');

// Loop through data and render each item in data
// Polar Flavors
for (let flavor of flavors) {
    const flavorEl = renderPolarFlavor(flavor);
    flavorsDivEl.append(flavorEl);
}
// 5 Largest Cities in Oregon by Population
for (let city of cities) {
    const cityEl = renderOregonCities(city);
    oregonCitiesEl.append(cityEl);
}

// Pets
for (let pet of pets) {
    const petEl = renderPets(pet);
    petsEl.append(petEl);
}


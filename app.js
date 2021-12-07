// Imports
import flavors from './polar-flavors-data.js';
import { renderPolarFlavor } from './polar-flavors-render.js';
import cities from './oregon-cities-data.js';
import { renderOregonCities } from './oregon-cities-render.js';

// Grab DOM elements
const flavorsDivEl = document.querySelector('#polar-flavors');
const oregonCitiesEl = document.querySelector('#oregon-cities');

// Loop through data and render each item in data
// Polar Flavors
for (let flavor of flavors) {
    const flavorEl = renderPolarFlavor(flavor);
    flavorsDivEl.append(flavorEl);
}
// 10 Largest Cities in Oregon by Population
for (let city of cities) {
    const cityEl = renderOregonCities(city);
    oregonCitiesEl.append(cityEl);
}

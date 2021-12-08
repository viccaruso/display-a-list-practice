export function renderOregonCities(citiesArr) {
    // Create an element(s)
    const cityDiv = document.createElement('div');
    const cityNameEl = document.createElement('p');
    const cityPopulationEl = document.createElement('p');
    const citySizeEl = document.createElement('p');
    // Set element attributes
    cityDiv.classList.add('city-class');
    cityNameEl.textContent = citiesArr.name;
    cityPopulationEl.textContent = `Pop: ${citiesArr.population}`;
    citySizeEl.textContent = `Size: ${citiesArr.size}`;

    cityDiv.append(cityNameEl, cityPopulationEl, citySizeEl);
    // Return the element
    return cityDiv;
}

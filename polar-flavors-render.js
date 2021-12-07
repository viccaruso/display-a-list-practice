export function renderPolarFlavor(flavorData) {
    // Create an element(s)
    const flavorEl = document.createElement('p');
    // Set element attributes
    flavorEl.classList.add('flavor');
    flavorEl.textContent = flavorData;
    // Return the element
    return flavorEl;
}



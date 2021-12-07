export function renderPets(petsObj) {
    // Create an element(s)
    const petDiv = document.createElement('div');
    const petName = document.createElement('p');
    const petType = document.createElement('p');
    const petColor = document.createElement('p');
    const petToys = document.createElement('ul');

    // Set element attributes
    
    petName.textContent = petsObj.name;
    petType.textContent = petsObj.type;
    petColor.textContent = petsObj.color;

    for (let toy of petsObj.favoriteToys) {
        const newToy = document.createElement('li');
        newToy.textContent = toy;
        petToys.append(newToy);
    }

    petDiv.classList.add('pet-class');
    petDiv.style.border = '1px dotted red';
    petDiv.append(petName, petType, petColor, petToys);
    // Return the element
    return petDiv;
}
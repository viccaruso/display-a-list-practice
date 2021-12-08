export function renderPets(petsObj) {
    // Create an element(s)
    const petDiv = document.createElement('div');
    const petName = document.createElement('p');
    const petType = document.createElement('p');
    const petColor = document.createElement('p');
    const petToysLabel = document.createElement('p');
    const petToys = document.createElement('ul');

    // Set element attributes
    
    petName.textContent = `Name: ${petsObj.name}`;
    petType.textContent = `Kind: ${petsObj.type}`;
    petColor.textContent = `Colors: ${petsObj.color}`;
    petToysLabel.textContent = 'Favorite toys: ';

    for (let toy of petsObj.favoriteToys) {
        const newToy = document.createElement('li');
        newToy.textContent = toy;
        petToys.append(newToy);
    }


    petDiv.classList.add('pet-class');
    petDiv.append(petName, petType, petColor, petToysLabel, petToys);
    // Return the element
    return petDiv;
}

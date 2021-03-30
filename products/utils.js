// import { fruits } from './products.js';
export function createFruitLi(fruits) {
    const li = document.createElement('li');
    li.classList.add('fruits');
    li.style.backgroundColor = fruits.color;

    const nameP = document.createElement('p');
    nameP.classList.add('name');
    nameP.textContent = fruits.name;

    const typeP = document.createElement('p');
    typeP.classList.add('type');
    typeP.textContent = fruits.type;

    const img = document.createElement('img');
    img.src = fruits.image;

    const isCruncy = document.createElement('p');
    isCruncy.classList.add('is-cruncy');
    isCruncy.textContent = fruits.isCruncy ? 'Cruncy!' : 'Not Cruncy!';

    const isOrganic = document.createElement('p');
    isOrganic.textContent = fruits.isOrganic ? 'Organic' : 'Not Organic';

    const priceP = document.createElement('p');
    priceP.classList.add('price');
    if (fruits.color === 'green') {
        priceP.style.color = 'red';
    }
    priceP.textContent = `${fruits.price}$ per pound`;

    const button = document.createElement('button');
    button.textContent = `Add ${fruits.name} to Cart!`;

    li.append(nameP, typeP, img, isCruncy, isOrganic, priceP, button);
    return li;
}
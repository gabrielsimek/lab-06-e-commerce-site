import { fruits } from './products/products.js';

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
    if (fruits.type === 'frozen-fruit') {
        typeP.style.backgroundColor = 'lightblue';
    }

    const img = document.createElement('img');
    img.src = fruits.image;

    const isCruncy = document.createElement('p');
    isCruncy.classList.add('is-cruncy');
    isCruncy.textContent = fruits.isCruncy ? 'Crunchy!' : 'Not Crunchy!';

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
    button.value = fruits.id;

    li.append(nameP, typeP, img, isCruncy, isOrganic, priceP, button);
    return li;
}


//findByID

export function findById(array, id) {
    for (let item of array){
        if (item.id === id){
            return item;
        }
    }
}

//calItemTotal
export function calcItemTotal(cartArray, productArray){
    let sum = 0;
    for (let cartItem of cartArray){
        const product = findById(productArray, cartItem.id);
        const price = product.price * cartItem.quantity;
        sum = sum + price;
       
        
        
    }
    return sum;
}
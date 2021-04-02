
import { addToCart, /*getCart*/ } from './local-storage-utils.js';
 
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
    button.addEventListener('click', () => {
        addToCart(fruits.id);
        // const cart = getCart();
        // console.log(cart);
        

    });

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

//caluclate item total
export function getItemPrice(productPrice, quantity){
    const sum = productPrice * quantity;
    return sum;
}
//calCartTotal
export function calcCartTotal(cartArray, productArray){
    let sum = 0;
    for (let cartItem of cartArray){
        const product = findById(productArray, cartItem.id);
        const price = getItemPrice(product.price, cartItem.quantity);
        sum += price;
        
    }
    return sum;
}

//Render DOM

export function createCartTd(cartItem, product) {
    

    const trEl = document.createElement('tr');

    const nameEl = document.createElement('td');
    nameEl.textContent = product.name;

    const priceEl = document.createElement('td');
    priceEl.textContent = `$${getItemPrice(product.price, cartItem.quantity)}`;

    const quantityEl = document.createElement('td');
    quantityEl.textContent = cartItem.quantity;





    trEl.append(nameEl, priceEl, quantityEl);
    return trEl;
  
}


//Render Total price row
export function createTotalRow(cartArray, productArray) {
    const trEl = document.createElement('tr');
    const blankEl1 = document.createElement('td');
    
    const blankEl2 = document.createElement('td');
    

    const totalEl = document.createElement('td');
    totalEl.textContent = `Total: $${calcCartTotal(cartArray, productArray)}`;
    
    

    trEl.append(blankEl1, blankEl2, totalEl);
    return trEl;
}
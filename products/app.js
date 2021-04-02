import { fruits } from './products.js';
import { createFruitLi, itemsInCart } from '../utils.js';
// import { getCart } from '../local-storage-utils.js';

const ulEl = document.querySelector('#products');
const cartCounterEl = document.getElementById('cart-counter');
cartCounterEl.textContent = itemsInCart();


for (let fruit of fruits) {
    ulEl.append(createFruitLi(fruit));
}
// const cart = getCart();
// console.log(cart);
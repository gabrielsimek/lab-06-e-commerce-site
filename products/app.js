import { fruits } from './products.js';
import { createFruitLi } from '../utils.js';
// import { getCart } from '../local-storage-utils.js';

const ulEl = document.querySelector('#products');

for (let fruit of fruits) {
    ulEl.append(createFruitLi(fruit));
}
// const cart = getCart();
// console.log(cart);
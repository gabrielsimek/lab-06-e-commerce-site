import { fruits } from './products.js';
import { createFruitLi } from '../utils.js';

const ulEl = document.querySelector('#products');

for (let fruit of fruits) {
    ulEl.append(createFruitLi(fruit));
}

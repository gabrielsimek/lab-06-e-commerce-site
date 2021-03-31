import { fruits } from '../products/products.js';
import { cart } from '../cart/cart-data.js';
import { findById, createCartTd, createTotalRow } from '../utils.js';

const table = document.getElementById('table');


for (let item of cart){
    const product = findById(fruits, item.id);
    const newRow = createCartTd(item, product);
    table.append(newRow);
}

const totalRow = createTotalRow(cart, fruits);
table.append(totalRow);
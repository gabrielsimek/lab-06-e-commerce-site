import { fruits } from '../products/products.js';
import { getCart } from '../local-storage-utils.js';
import { findById, createCartTd, createTotalRow } from '../utils.js';

const table = document.getElementById('table');
const cart = getCart();

for (let item of cart){
    

     
    const product = findById(fruits, item.id);
   
    
    const newRow = createCartTd(item, product);

  

    table.append(newRow);

    
}
   
const totalRow = createTotalRow(cart, fruits);


table.append(totalRow);


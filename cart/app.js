import { fruits } from '../products/products.js';
import { getCart, setCart } from '../local-storage-utils.js';
import { findById, createCartTd, createTotalRow } from '../utils.js';
const submitButton = document.getElementById('submit');
console.log(submitButton);
const table = document.getElementById('table');
const cart = getCart();


for (let item of cart){
    

     
    const product = findById(fruits, item.id);
   
    
    const newRow = createCartTd(item, product);

  

    table.append(newRow);

    
}
   
const totalRow = createTotalRow(cart, fruits);


table.append(totalRow);

submitButton.addEventListener('click', () => {
    const alertCart = JSON.stringify(cart, true, 2);
    alert(alertCart);
    window.location = '/';
    localStorage.clear();

});
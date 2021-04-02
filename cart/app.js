import { fruits } from '../products/products.js';
import { getCart } from '../local-storage-utils.js';
import { findById, createCartTd, createTotalRow } from '../utils.js';
const submitButton = document.getElementById('submit');

const table = document.getElementById('table');
const cart = getCart();
// setCart(cart);
// console.log(cart);
// setCart(cart);

// const cartItem = [{
//     id: 3,
//     quantity: 4
// }];
// const cartItemLocal = JSON.stringify(cartItem);
// localStorage.setItem('CART', cartItemLocal);


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



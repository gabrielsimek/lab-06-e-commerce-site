import { fruits } from '../products/products.js';
import { cart } from '../cart/cart-data.js';
import { findById, createCartTd, createTotalRow } from '../utils.js';

const table = document.getElementById('table');


for (let item of cart){
    //for each itteration through cart array call findByID

     
    const product = findById(fruits, item.id);
   //findById iterates through the fruit array matching the id of the current cart item.id prop to the id prop of the current product item on each itteration through product array of findBy id: returns the matching product item 
    
    const newRow = createCartTd(item, product);

    //call createCartId on each iteration through cart, using current indexed item and product it was matched to with findByID
    //createCartd calls the keys from the object of current cart array loop iteration item and the product object it was matched to by id to dynamically create a tr el with the td's populated by the info from the matching objects. appends td's and returns a tr.


    table.append(newRow);

    //tr is appended to the only hard coded table in index
    //will repeat proccess for each itteration of cart array
}
   
const totalRow = createTotalRow(cart, fruits);
//create final row of data which will only contain total price for all items in cart. inlcudes entire cart array and entire products array. 
//contains calcCartTotal function inside of createTotalRow function. Takes in both cart and product array, initizales a sum outside of loop to be added to on each itteration. itterates through entire cart array, for each itteration again finds a matching product (need price info from product, quantity info from cart).Finds the price from product which matches the current item (current item of cartArray loop iteration). multiplies this price by the quantity of current matching item. on each itteration add the price of current item (quanity * price) to sum. return sum
//sum used to fill textContent in cTT function.

table.append(totalRow);

//append totalRow at end of table (outside loop)
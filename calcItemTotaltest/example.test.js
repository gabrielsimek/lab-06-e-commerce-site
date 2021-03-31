// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { cart } from '../cart/cart-data.js';
import { calcItemTotal } from '../utils.js';
const test = QUnit.test;
import { fruits } from '../products/products.js';
test('derive the total price for the cart my multiply the quantity of each item by its price and adding all totals togeter. should take in the fruits array and the cart array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = (4 * 3) + (2 * 4) + (2 * 4);
    
   
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(cart, fruits);
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
 
    
});

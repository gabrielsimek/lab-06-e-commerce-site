// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { setCart, getCart, addToCart } from '../local-storage-utils.js';
const test = QUnit.test;

const testCart = [{
    id: 1,
    quantity: 4
},
{
    id: 4,
    quantity: 2
}];

test('When I call setCart with the testCart as a parameter I want it to return that cart as serialized data in local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    setCart(testCart);
    const testCartinLocal = localStorage.getItem('CART');
    const parsedCart = JSON.parse(testCartinLocal);
    
    //Act 
    // Call the function you're testing and set the result to a const
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(testCart, parsedCart);
});

test('When i call getCart I want it to return the cart set in local storage as an array of objects ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartAsString = JSON.stringify(testCart);
    localStorage.setItem('CART', cartAsString);
    const cart = getCart();



    
    //Act 
    // Call the function you're testing and set the result to a const
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(cart, testCart);
});


test('addToCart should take in a product id and increment its quantity if it is already in the cart or add it to the cart if not ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
   
    const cartAsString = JSON.stringify(testCart);
    localStorage.setItem('CART', cartAsString);
    addToCart(5);

    const actual = getCart();
    const expected = [{
        id: 1,
        quantity: 4
    },
    {
        id: 4,
        quantity: 2
    },
    {
        id: 5,
        quantity: 1
    }];

    
    //Act 
    // Call the function you're testing and set the result to a const
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


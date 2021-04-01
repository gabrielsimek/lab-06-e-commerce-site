// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { calcItemTotal } from '../utils.js';
const test = QUnit.test;

test('derive the total price for the cart my multiply the quantity of each item by its price and adding all totals togeter. should take in the fruits array and the cart array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 48;
    
   
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal([
        {
            id: 1,
            quantity: 4
        },
        {
            id: 4,
            quantity: 2
        },
        {
            id: 2,
            quantity: 4
        },
        {
            id: 3,
            quantity: 4
        },
        
    ], [
        {
            id: 1,
            type: 'fresh-fruit',
            name: 'Red Apple',
            color: 'red',
            image: `../assets/apple.jpg`,
            isCruncy: true,
            isOrganic: false,
            price: 3
        },
        {
            id: 2,
            type: 'fresh-fruit',
            name: 'Banana',
            color: 'yellow',
            image: `../assets/banana.jpg`,
            isCruncy: false,
            isOrganic: true,
            price: 2
        },
        {
            id: 3,
            type: 'frozen-fruit',
            name: 'Blueberries',
            color: 'blue',
            image: '../assets/blueberries.jpg',
            isCruncy: false,
            isOrganic: false,
            price: 5
        },
        {
            id: 4,
            type: 'fresh-fruit',
            name: 'Cantaloupe',
            color: 'green',
            image: '../assets/cantaloupe.jpg',
            isCruncy: false,
            isOrganic: false,
            price: 4
        },
        {
            id: 5,
            type: 'frozen-fruit',
            name: 'Strawberries',
            color: 'red',
            image: '../assets/strawberries.jpg',
            isCruncy: false,
            isOrganic: true,
            price: 6
        },
        
        { 
            id: 6,
            type: 'fresh fruit',
            name: 'Manderins',
            color: 'orange',
            image: '../assets/mandarins.jpg',
            isCruncy: false,
            isOrganic: false,
            price: 2
        },
        
        
        
    
    
    ]);
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
 
    
});

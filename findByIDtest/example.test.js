// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { findById } from '../utils.js';
const test = QUnit.test;
import { fruits } from '../products/products.js';
test('input an array of objects and an id and return the objects with a matching id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected1 = {
        id: 1,
        type: 'fresh-fruit',
        name: 'Red Apple',
        color: 'red',
        image: `../assets/apple.jpg`,
        isCruncy: true,
        isOrganic: false,
        price: 3
    };
    const expected2 = {
        id: 2,
        type: 'fresh-fruit',
        name: 'Banana',
        color: 'yellow',
        image: `../assets/banana.jpg`,
        isCruncy: false,
        isOrganic: true,
        price: 2
    };

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = findById(fruits, 1);
    const actual2 = findById(fruits, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual1, expected1, 'first obj, id 1');
    expect.deepEqual(actual2, expected2, 'first obj, id 1');
    
});

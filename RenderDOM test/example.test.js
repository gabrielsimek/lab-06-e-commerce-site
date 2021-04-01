// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { createCartTd } from '../utils.js';
const test = QUnit.test;

test('create and return table row with table data appended to it based on information from the cart item and product product item ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<tr><td>Red Apple</td><td>$12</td><td>4</td></tr>`;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCartTd(
        {
            id: 1,
            quantity: 4
        },
        {
            id: 1,
            type: 'fresh-fruit',
            name: 'Red Apple',
            color: 'red',
            image: `../assets/apple.jpg`,
            isCruncy: true,
            isOrganic: false,
            price: 3
        }
     
    );

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

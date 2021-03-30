// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { createFruitLi } from '../products/utils.js';
const test = QUnit.test;

test('Compare a dynamically created li to the outerHTML string of the hard coded Li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="fruits" style="background-color: red;"><p class="name">Red Apple</p><p class="type">Fresh Fruit</p><img src="../assets/apple.jpg"><p class="is-cruncy">Cruncy!</p><p>Not Organic</p><p class="price">3$ per pound</p><button>Add Red Apple to Cart!</button></li>`;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createFruitLi({
        type: 'Fresh Fruit',
        name: 'Red Apple',
        color: 'red',
        image: '../assets/apple.jpg',
        isCruncy: true,
        isOrganic: false,
        price: 3
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

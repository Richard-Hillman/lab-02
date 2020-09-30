
// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { randomWare } from '../utilities.js';

const test = QUnit.test;

test('create a random number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

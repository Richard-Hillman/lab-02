
// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { compareTwoNum, randomWare } from '../utilities.js';

const test = QUnit.test;

// TEST 1 ------------------------------------------------------------------------

test('I want to compare two numbers that are equal from random and user and return a 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const random = 2;
    const user = 2;

    const expected = 0;

    // Call the function you're testing and set the result to a const
    const actual = compareTwoNum(random, user);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



// TEST 2 --------------------------------------------------------------------------


test('I want to compare random number with user, and if user number greater than random number, return -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const random = 3;
    const user = 5;

    const expected = -1;

    // Call the function you're testing and set the result to a const
    const actual = compareTwoNum(random, user);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



// TEST 3 ---------------------------------------------------------------------------


test('I want to compare random number with user, and if random number greater than user number, return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const random = 9;
    const user = 5;

    const expected = 1;

    // Call the function you're testing and set the result to a const
    const actual = compareTwoNum(random, user);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

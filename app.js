import { randomWare } from './utilities.js';
import { compareTwoNum } from './utilities.js';

const userGuess = document.getElementById('user-guess');

const guessButton = document.getElementById('guess-button');

const remainingGuesses = document.getElementById('rem-guesses');

const clue = document.getElementById('higher-lower');

const mysteryNumber = document.getElementById('mystery-number');

// console.log(userGuess, guessButton, remGuesses, clue, mysteryNumber);
// page loads randomWare needs to run once.
// Need to hide number. 

const randomNumber = randomWare(); 

// console.log(randomNumber)

mysteryNumber.textContent = randomNumber;

// console.log(mysteryNumber.textContent)

// butoon is clicked 
// remaining guesses goes down
// userinput compared to mystery number

// if they guess right:
// import functions and grab DOM elements

// initialize state
let remGuesses = 4;   
// set event listeners to update state and DOM;

guessButton.addEventListener('click', () => {
    remGuesses--;
    const guessValue = userGuess.valueAsNumber;
    const result = compareTwoNum(randomNumber, guessValue); 
    remainingGuesses.textContent = remGuesses;

    if (result === 0) {
        clue.textContent = 'YOU WIN!!!';}
    if (result === 1) {
        clue.textContent = 'Guess higher!';} 
    if (result === -1) {
        clue.textContent = 'Guess Lower!';}
    if (remGuesses === 0) {
        clue.textContent = 'You LOSE!';
        guessButton.disabled = true;}
});


// export function compareTwoNum(random, user) { 
//     console.log(random, user);
//     if (random === user) {
//         return 0;
//     }
//     if (random > user) {
//         return 1;
//     }
//     if (random < user) {
//         return -1;
//     }
    
// }


import { randomWare } from './utilities.js';

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
    compareTwoNum(randomNumber, userGuess) 
});


function compareTwoNum(randomNumber, userGuess) { 
    if (randomNumber === userGuess) {
        clue.textContent = 'YOU WIN!!!';
    }
    
    if (randomNumber > userGuess) {
        clue.textContent = 'Guess higher!'; 
    }
    
    if (randomNumber < userGuess) {
        clue.textContent = 'Guess Lower!';
    }
    
    remainingGuesses.textContent = remGuesses;
    
    
};


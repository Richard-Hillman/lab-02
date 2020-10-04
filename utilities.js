// function that creates a random number 

export function randomWare() {
    return Math.ceil(Math.random() * 20);
} 

// function that converts compares results of random and user

export function compareTwoNum(random, user) { 
   
    if (random === user) {
        return 0;
    }
    if (random > user) {
        return 1;
    }
    if (random < user) {
        return -1;
    }
    
}



































// eventlistener button is clicked 
//     number of guess goes down by one 
//     function userinput is compared to random number
//         returns clue of higher or lower 
//         or ends game if user correct 

/** Create a function that prompts the computer to randomly generate an answer between Rock,
 * Paper and Scissors
 */

function getComputerChoice() {
    let r = "ROCK";
    let p = "PAPER";
    let s = "SCISSORS";
    /** Generate a random answer between 1, 2, or 3 */
    let randomInterger = Math.floor(Math.random() * 3) + 1;
    /** Each number is assigned a variable, the value of the variable gives the computer choice
     * for the game
     */
    if (randomInterger === 1) {
        return r;
    } else if (randomInterger === 2) {
        return p;
    } else {
        return s;
    }
}

/**Create a function that compares the user generated choice and computer choice, 
 * the function then declares a winner, loser or tie
 */
function play(playerSelection, computerSelection) {
    if (computerSelection === "ROCK" && playerSelection === "ROCK") {
        return "Tie Game!";
    } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
        return "You Win!";
    } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
        return "You Lose!";
    } else if (computerSelection === "PAPER" && playerSelection === "PAPER") {
        return "Tie Game!";
    } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
        return "You Win!";
    } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
        return "You Lose!";
    } else if (computerSelection === "SCISSORS" && playerSelection === "SCISSORS") {
        return "Tie Game!";
    } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
        return "You Win!";
    } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
        return "You Lose!";
    }
}

/** Create a function that repeats for 5 rounds and declares the score at the end */
function game() {
    /** Declares 2 variables to act as scorekeepers */
    let playerScore = 0;
    let computerScore = 0;
    /** 'round' variable acts as a counter for the function to max out at 5 iterations */
    for (let round = 0; round <=5; round++) {
        /** Declare 3 variable: 'playerSelection' is user generated, and 'computerSelection' is pulled 
         * from prior function. 'result' is used to call the play() function and generate a winner
         * for the round. At the end of each round the score is updated. 
         */
        let playerSelection = prompt("Rock, Paper, Scissors?").toUpperCase();
        let computerSelection = getComputerChoice();
        let result = play(playerSelection, computerSelection);
        console.log(result);

        if (result === "Tie Game!") {
        
        } else if (result === "You Win!") {
            playerScore++;
        } else {
            computerScore++;
        } 
    }

    return playerScore + " - " + computerScore;
}

/** Returns winner of game */
let score = game();
console.log(score);


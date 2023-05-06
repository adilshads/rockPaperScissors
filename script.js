/** Create a function that prompts the computer to randomly generate an answer between Rock,
 * Paper and Scissors
 */

function getComputerChoice() {
    let r = "ROCK";
    let p = "PAPER";
    let s = "SCISSORS";
    let randomInterger = Math.floor(Math.random() * 3) + 1;

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
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round <=5; round++) {

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

let score = game();
console.log(score);


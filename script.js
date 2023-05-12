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
    if (computerSelection === playerSelection) {
      return "Tie game!";
    } else if (
      (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
      (computerSelection === "PAPER" && playerSelection === "ROCK") ||
      (computerSelection === "SCISSORS" && playerSelection === "PAPER")
    ) {
      return "You lose!";
    } else {
      return "You win!";
    }
}

/** Selects the HTML element with the id container and stores it in the container 
 * variable. It provides a convenient way to access and manipulate the container 
 * element in the code. */
const container = document.querySelector('#container');

/* Takes value player selection according to the button the user clicked, then 
runs the play() function to compare the choice to the computerSelection and 
declare who won the round */ 
function playerButtonClick(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = play(playerSelection, computerSelection);
    console.log(result);
}

/** Keeps tab of the players score */
let playerScore = 0;

function updatePlayerScore(result) {
    if (result === "You win!") {
        playerScore += 1; 
    }
    return playerScore;
}

let computerScore = 0;

/** Keeps tabs of the computers score */
function updateComputerScore(result) {
    if (result === "You win!") {
        computerScore += 1; 
    }
    return computerScore;
}

/** Keeps tabs of the number of rounds */
let currentRound = 0;

function updateRound() {
  currentRound++;
  return currentRound;
}


function 
/** Button for player option "ROCK" */
const rockButton = document.createElement('button');
rockButton.textContent = 'ROCK';
rockButton.addEventListener('click', function() {
    playerButtonClick("ROCK");
    console.log('Player chooses ROCK!');
});
container.appendChild(rockButton);

/** Button for player option "PAPER" */
const paperButton = document.createElement('button');
paperButton.textContent = 'PAPER';
paperButton.addEventListener('click', function() {
    playerButtonClick("PAPER");
    console.log('Player chooses PAPER!');
});
container.appendChild(paperButton);

/** Button for player option "SCISSORS" */
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'SCISSORS';
scissorsButton.addEventListener('click', function() {
    playerButtonClick("SCISSORS");
    console.log('Player chooses SCISSORS!');
});
container.appendChild(scissorsButton);

/** Button for starting game 
const startButton = document.createElement('button');
startButton.textContent = 'Start Game';
startButton.addEventListener('click', function() {
    let score = game(); 
    console.log(score);
});
container.appendChild(startButton);

*/

/** 
/** Create a function that repeats for 5 rounds and declares the score at the end */
//function game() { 
    /** Declares 2 variables to act as scorekeepers */
//    let playerScore = 0;
//    let computerScore = 0;
    /** 'round' variable acts as a counter for the function to max out at 5 iterations */
//    for (let round = 1; round <= 5; round++) {
        /** Declare 3 variable: 'playerSelection' is user generated, and 'computerSelection' is pulled 
         * from prior function. 'result' is used to call the play() function and generate a winner
         * for the round. At the end of each round the score is updated. 
         
        let playerSelection = ("Rock, Paper, Scissors?").toUpperCase();
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
*/

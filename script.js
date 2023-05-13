/** Create a function that prompts the computer to randomly generate an answer between Rock,
 * Paper and Scissors
 */

function getComputerChoice() {
  let r = "ROCK";
  let p = "PAPER";
  let s = "SCISSORS";
  /** Generate a random answer between 1, 2, or 3 */
  let randomInteger = Math.floor(Math.random() * 3) + 1;
  /** Each number is assigned a variable, the value of the variable gives the computer choice
   * for the game
   */
  if (randomInteger === 1) {
      return r;
  } else if (randomInteger === 2) {
      return p;
  } else {
      return s;
  }
}

/** Create a function that compares the user generated choice and computer choice, 
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
  updateScoreAndCheckWinner(result);
  displayScore(playerSelection, computerSelection);
}

/** Displays the score of the player and the computer after every round */
function displayScore(playerSelection, computerSelection) {
  document.getElementById("result").textContent = "Player Score: " + playerScore;
  document.getElementById("result").textContent += " Computer Score: " + computerScore;
  document.getElementById("result").textContent += " Player Choice: " + playerSelection;
  document.getElementById("result").textContent += " Computer Choice: " + computerSelection;
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
  console.log(`Player Choice: ${playerSelection}`);
  console.log(`Computer Choice: ${computerSelection}`);

  if (currentRound % 5 === 0) {
    if (playerScore > computerScore) {
      document.getElementById("result").textContent = "You Win, You May Proceed!";
      console.log("Player Wins!");
    } else if (playerScore < computerScore) {
      document.getElementById("result").textContent = "You Lose, Try Again!";
      console.log("Computer Wins!");
    } else {
      document.getElementById("result").textContent = "It's a Tie, Try Again!";
      console.log("It's a Tie!");
    }
  } else if (currentRound > 0 && playerScore === computerScore) {
    document.getElementById("result").textContent = "Tie!";
    console.log("Tie!");
  }
}


/** Keeps track of player score and computer score then declares a winner every 5 rounds */ 
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

function updateScoreAndCheckWinner(result) {
  if (result === "You win!") {
    playerScore++;
  } else if (result === "You lose!") {
    computerScore++;
  }

  currentRound++;
  
  if (currentRound % 5 === 0) {
    if (playerScore > computerScore) {
      document.getElementById("result").textContent = "You Win, You May Proceed!";
      console.log("Player Wins!");
    } else if (playerScore < computerScore) {
      document.getElementById("result").textContent = "You Lose, Try Again!";
      console.log("Computer Wins!");
    } else {
      document.getElementById("result").textContent = "It's a Tie, Try Again!";
      console.log("It's a Tie!");
    }
    
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);

  }
}

/** Reset the scores and rounds to 0 */
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  currentRound = 0;
  displayScore(); // Update the score display after resetting
  document.getElementById("result").textContent = "New Match!";
}

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

/** Button to reset the game. */
const playAgainButton = document.createElement('button');
playAgainButton.textContent = 'Play Again';
playAgainButton.addEventListener('click', resetGame);
container.appendChild(playAgainButton);

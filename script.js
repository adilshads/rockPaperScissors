// script.js
document.addEventListener("DOMContentLoaded", function() {
  var blackScreen = document.getElementById("black-screen");

  setTimeout(function() {
    blackScreen.remove();
  }, 15000);
});

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
declare who won the round. Display image correlating to player choice on screen. */ 
function playerButtonClick(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = play(playerSelection, computerSelection);
  console.log(result);
  updateScoreAndCheckWinner(result);
  displayScore(playerSelection, computerSelection);

  // Remove existing image elements
  const imagesContainer = document.querySelector('.images');
  while (imagesContainer.firstChild) {
    imagesContainer.firstChild.remove();
  }

  // Create and display the appropriate image based on the player's selection
  let imageSrc = '';
  let imageAlt = '';

  if (playerSelection === 'ROCK') {
    imageSrc = 'img/rockInOcean.jpg';
    imageAlt = 'Large rock in the edge of the ocean';
  } else if (playerSelection === 'PAPER') {
    imageSrc = 'img/parchmentRoll.jpg';
    imageAlt = 'Two rolled up parchment paper rolls with the images of maps on the outside, tied with brown ribbons, one is standing straight, the other is leaning on it in a 45 degree angle. Black Background.';
  } else if (playerSelection === 'SCISSORS') {
    imageSrc = 'img/basicScissors.jpg';
    imageAlt = 'Basic closed scissors, with black handles and white background';
  }

  const image = document.createElement('img');
  image.src = imageSrc;
  image.alt = imageAlt;
  image.classList.add('image-class');
  imagesContainer.appendChild(image);
}

/** Displays the score of the player and the computer after every round */
function displayScore(playerSelection, computerSelection) {
  document.getElementById("result").textContent = "Player Score: " + playerScore;
  document.getElementById("result").textContent += " Computer Score: " + computerScore;
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (currentRound % 5 === 0 && currentRound !== 0) {
    if (playerScore > computerScore) {
      document.getElementById("result").textContent = "You Win, You May Proceed! Player Choice: " +
        playerSelection + " Computer Choice: " + computerSelection +
        " - Final Score: Player Score - " + playerScore.toString() +
        " Computer Score - " + computerScore.toString();
      console.log("Player Wins!");
      displayCoveringImage('img/fantasyPassageEntrance.jpg');
    } else if (playerScore < computerScore) {
      document.getElementById("result").textContent = "You Lose, Try Again! Player Choice: " +
        playerSelection + " Computer Choice: " + computerSelection +
        " - Final Score: Player Score - " + playerScore.toString() +
        " Computer Score - " + computerScore.toString();
      console.log("Computer Wins!");
      displayCoveringImage('img/silhouteInPassage.jpg');
    } else {
      document.getElementById("result").textContent = "It's a Tie, Try Again! Player Choice: " +
        playerSelection + " Computer Choice: " + computerSelection +
        " - Final Score: Player Score - " + playerScore.toString() +
        " Computer Score - " + computerScore.toString();
      console.log("It's a Tie!");
    }
  } else {
    document.getElementById("result").textContent += " Player Choice: " + playerSelection;
    document.getElementById("result").textContent += " Computer Choice: " + computerSelection;
    console.log(`Player Choice: ${playerSelection}`);
    console.log(`Computer Choice: ${computerSelection}`);
  }
}

/** Displays the covering image on the screen for a specified duration */
function displayCoveringImage(imageSrc, duration) {
  // Create the image element
  const image = document.createElement('img');
  image.src = imageSrc;
  image.alt = 'Covering Image';
  image.classList.add('covering-image');

  // Apply CSS styles to cover the entire screen
  image.style.position = 'fixed';
  image.style.top = '0';
  image.style.left = '0';
  image.style.width = '100%';
  image.style.height = '100%';
  image.style.objectFit = 'cover';
  image.style.zIndex = '9999';

  // Add the image to the body
  document.body.appendChild(image);

  // Set a timeout to remove the image after the specified duration
  setTimeout(() => {
    image.remove();
  }, duration);
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
      displayCoveringImage('img/fantasyPassageEntrance.jpg', 5000); // Display covering image for 5 seconds
    } else if (playerScore < computerScore) {
      document.getElementById("result").textContent = "You Lose, Try Again!";
      console.log("Computer Wins!");
      displayCoveringImage('img/silhouteInPassage.jpg', 5000); // Display covering image for 5 seconds
    } else {
      document.getElementById("result").textContent = "It's a Tie, Try Again!";
      console.log("It's a Tie!");
    }
    
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }
}

/** Reset the scores and rounds to 0, and return pictures to screen. */
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  currentRound = 0;
  displayScore(); // Update the score display after resetting

  // Remove existing image elements
  const imagesContainer = document.querySelector('.images');
  while (imagesContainer.firstChild) {
    imagesContainer.firstChild.remove();
  }

  // Recreate and display the original images
  const rockImage = document.createElement('img');
  rockImage.src = 'img/rockInOcean.jpg';
  rockImage.alt = 'Large rock in the edge of the ocean';
  rockImage.classList.add('image-class');
  imagesContainer.appendChild(rockImage);

  const parchmentImage = document.createElement('img');
  parchmentImage.src = 'img/parchmentRoll.jpg';
  parchmentImage.alt = 'Two rolled up parchment paper rolls with the images of maps on the outside, tied with brown ribbons, one is standing straight, the other is leaning on it in a 45 degree angle. Black Background.';
  parchmentImage.classList.add('image-class');
  imagesContainer.appendChild(parchmentImage);

  const scissorsImage = document.createElement('img');
  scissorsImage.src = 'img/basicScissors.jpg';
  scissorsImage.alt = 'Basic closed scissors, with black handles and white background';
  scissorsImage.classList.add('image-class');
  imagesContainer.appendChild(scissorsImage);

  // Update the message to "New Match!"
  document.getElementById("result").textContent = "New Match!";
}



/** Function that styles buttons */

function createStyledButton(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', onClick);
  button.classList.add('button-class');
  return button;
}

/** Button for player option "ROCK" */
const rockButton = createStyledButton('ROCK', () => {
  playerButtonClick('ROCK');
  console.log('Player chooses ROCK!');
});
container.appendChild(rockButton);

/** Button for player option "PAPER" */
const paperButton = createStyledButton('PAPER', () => {
  playerButtonClick('PAPER');
  console.log('Player chooses PAPER!');
});
container.appendChild(paperButton);

/** Button for player option "SCISSORS" */
const scissorsButton = createStyledButton('SCISSORS', () => {
  playerButtonClick('SCISSORS');
  console.log('Player chooses SCISSORS!');
});
container.appendChild(scissorsButton);

/** Button to reset the game. */
const playAgainButton = createStyledButton('Play Again', resetGame);
container.appendChild(playAgainButton);
function getComputerChoice() {
    let r = "ROCKk";
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

/** 
function rockPaperScissors(playerelection, computerSelection) {
    let computerSelection = getComputerChoice;
    let playerSelection = prompt("Rock, Paper, Scissors?").toUpperCase();

    if (computerSelection =)
}

*/


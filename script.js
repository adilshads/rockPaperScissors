function getComputerChoice() {
    let r = 1;
    let p = 2;
    let s = 3;
    let randomInterger = Math.floor(Math.random() * 3) + 1;

    if (randomInterger === 1) {
        return "Rock";
    } else if (randomInterger === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
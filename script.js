function getComputerChoice() {
    let r = "Rock";
    let p = "Paper";
    let s = "Scissors";
    let randomInterger = Math.floor(Math.random() * 3) + 1;

    if (randomInterger === 1) {
        return r;
    } else if (randomInterger === 2) {
        return p;
    } else {
        return s;
    }
}
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2: 
            return "SCISSORS"
    }
}

function gameRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a tie!";
    } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        return "Player wins!"
    } else if (
        (playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        return "Computer wins!"
    }
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();

console.log(gameRound(playerSelection, computerSelection));
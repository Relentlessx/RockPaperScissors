let playerScore = 0;
let computerScore = 0;
let winner = "";


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
        winner = "tie!";
    } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        winner = "Player"

    } else if (
        (playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        winner = "Computer";
    }
    return winner;
}

function game(){
    let playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toUpperCase();

    const computerSelection = getComputerChoice();

    let roundResult = gameRound(playerSelection, computerSelection);

    if (roundResult.search("Player") > -1) {
        playerScore++;
      } else if (roundResult.search("Computer") > -1) {
        computerScore++;
      }
      if (playerScore >= 5 && computerScore < 5) {
        message.textContent = 'Game Over. You Win!';
      } else if (playerScore < 5 && computerScore >= 5) {
        message.textContent = 'Game Over. You Lose!';
      }

      return roundResult;
}




console.log(game());
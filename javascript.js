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
        winner = "Player wins!"

    } else if (
        (playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        winner = "Jimmy wins!";
    }
    return winner;
}

function game(){
    let playerSelection = "";
    const btnRock = document.querySelector('#btnRock');
    btnRock.addEventListener('click', () => {
        console.log("Rock");
    })

    playerSelection = playerSelection.toUpperCase();
    console.log('Player: ' + playerSelection + "!");

    const computerSelection = getComputerChoice();
    console.log('Jimmy: ' + computerSelection + "!");

    let roundResult = gameRound(playerSelection, computerSelection);
    console.log(roundResult)

    

      

}


game()



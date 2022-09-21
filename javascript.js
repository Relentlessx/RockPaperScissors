let playerScore = 0;
let computerScore = 0;


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


function gameRound(playerSelection){
    let computerSelection = getComputerChoice();
    let winner = "";

    if (playerSelection === computerSelection){
        winner = ('It\'s a tie. You both chose ' + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
    } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        playerScore += 1;
        winner = ("Player wins! " + playerSelection + " beats " + computerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore); 
        if (playerScore == 5){
            winner = "You won the game!";
            disableButtons();
        }
        

    } else if (
        (playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "ROCK")
    ) {
        computerScore += 1;
        winner = ('You lose! ' + computerSelection + ' beats ' + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
        if (computerScore == 5){
            winner = "You lost the game! lmao noob.";
            disableButtons();
        }
    }
    document.getElementById('winner').innerHTML = winner;
    return;
}

// Buttons event listener

const btn = document.querySelectorAll('#btn');
btn.forEach(button =>{
    button.addEventListener('click', function(){
        gameRound(button.value);
    })
})

// Disable buttons (used to end the game)

function disableButtons() {
    btn.forEach(elem => {
        elem.disabled = true;
    })
}    



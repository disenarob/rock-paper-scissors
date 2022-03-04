const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", () => game("Rock"));
paperBtn.addEventListener("click", () => game("Paper"));
scissorsBtn.addEventListener("click", () => game("Scissors"));

let playerCount = 0;
let computerCount = 0;

function computerPlay() {
    let draw = "";
    const num = Math.floor(Math.random() * 3);

    if (num === 0) {
        draw = "Rock";
    }
    else if (num === 1) {
        draw = "Paper";
    }
    else if (num === 2) {
        draw = "Scissors";
    }
    return draw;
}

function playRound(playerSelection, computerSelection) {
    let message;


    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Rock":
                    message = "Rock vs rock. Tie!";
                    break;
                case "Paper":
                    message = "Paper beats rock. Computer wins!";
                    computerCount++;
                    break;
                case "Scissors":
                    message = "Rock beats scissors. Player wins!";
                    playerCount++;
                    break;
            }
            break;
        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    message = "Paper beats rock. Player wins!";
                    playerCount++;
                    break;
                case "Paper":
                    message = "Paper vs paper. Tie!";
                    break;
                case "Scissors":
                    message = "Scissors beats paper. Computer wins!";
                    computerCount++;
                    break;
            }
            break;
        case "Scissors":
            switch (computerSelection) {
                case "Rock":
                    message = "Rock beats scissors. Computer wins!";
                    computerCount++;
                    break;
                case "Paper":
                    message = "Scissors beats paper. Player wins!";
                    playerCount++;
                    break;
                case "Scissors":
                    message = "Scisors vs scissors. Tie!";
                    break;
            }
            break;
    }

    return message;
}

function displayMessage(msg) {
    document.getElementById("message").innerHTML = msg;
    document.getElementById("message").style.visibility = "visible";
}

function count() {
    playerScore = document.getElementById("player-score");
    computerScore = document.getElementById("computer-score");

    if (playerCount >= 5) {
        playerCount = 0;
        computerCount = 0;
        displayMessage("Player wins the game!");
    }
    else if (computerCount >= 5) {
        playerCount = 0;
        computerCount = 0;
        displayMessage("Computer wins the game!");
    }

    document.getElementById("results").style.display = "flex";
    playerScore.innerHTML = playerCount;
    computerScore.innerHTML = computerCount;


}


function game(player) {
    displayMessage(playRound(player, computerPlay()));
    count();
}
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", () => game("Rock"));
paperBtn.addEventListener("click", () => game("Paper"));
scissorsBtn.addEventListener("click", () => game("Scissors"));


function computerPlay(){
    let draw = "";
    const num = Math.floor(Math.random() * 3);

    if (num === 0){
        draw = "Rock";
    }
    else if(num === 1){
        draw = "Paper";
    }
    else if(num === 2){
        draw = "Scissors";
    } 
    return draw;
}

function playRound(playerSelection, computerSelection){
    let message;
   
    
    switch(playerSelection){
        case "Rock":
            switch(computerSelection){
                case "Rock":
                    message = "Rock vs rock. Tie!";
                    break;
                case "Paper":
                    message = "Paper beats rock. Computer wins!";
                    break;
                case  "Scissors":
                    message = "Rock beats scissors. Player wins!";
                    break;
            }
        break;
        case "Paper":
            switch (computerSelection){
                case "Rock":
                    message = "Paper beats rock. Player wins!!";
                    break;
                case "Paper":
                    message = "Paper vs paper. Tie!";
                    break;
                case  "Scissors":
                    message = "Scissors beats paper. Computer wins!";
                    break;
            }
            break;
            case "Scissors":
            switch(computerSelection){
                case "Rock":
                    message = "Rock beats scissors. Computer wins!";
                    break;
                case "Paper":
                    message = "Scissors beats paper. Player wins!";
                    break;
                case  "Scissors":
                    message = "Scisors vs scissors. Tie!";
                    break;
            }
            break;
    }

    return message;
}

function displayMessage(msg){
    document.getElementById("message").innerHTML = msg;
    document.getElementById("message").style.display = "block";
}
function game(player){
    displayMessage(playRound(player, computerPlay()));
}
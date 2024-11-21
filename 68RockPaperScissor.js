// ROCK - PAPER - SCISSORS

const choices = ["rock", "paper", "scissor"];
const displayPlayer = document.getElementById("displayPlayer");
const displayComputer = document.getElementById("displayComputer");
const displayResult = document.getElementById("displayResult");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoices = choices[Math.floor(Math.random()*3)];

    let result ="";

    if(playerChoice === computerChoices){
        result = "It's a Tie";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = computerChoices=="scissor"? "You Win": "You Lose";
                break;

            case "paper":
                result = computerChoices=="rock"? "You Win": "You Lose";  
                break;
                
            case "scissor":
                result = computerChoices=="paper"? "You Win": "You Lose"; 
                break;       
        }
    }
    displayPlayer.textContent = `Player: ${playerChoice}` ;
    displayComputer.textContent = `Computer: ${computerChoices}`;
    displayResult.textContent = result;

    displayResult.classList.remove("greenText", "redText");

    switch(result){
        case "You Win":
            displayResult.classList.add("greenText");
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
            break;

        case "You Lose":
            displayResult.classList.add("redText"); 
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }  
}


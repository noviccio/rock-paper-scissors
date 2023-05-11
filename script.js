//getting nodes for DOM
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors"); 
const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.comp-score');
const roundMessage = document.querySelector('.round-result');
const gameMessage = document.querySelector('.game-result'); 
const tryAgain = document.querySelector('.try-again');
const paragraph = document.createElement('p');  

 //store scores 
let compScore = 0;
let playerScore = 0;

tryAgain.addEventListener('click', resetGame);

rockButton.addEventListener("click", function() {
    if(playerScore >= 5 || compScore >= 5){
        return; 
    }
    game("rock");
    
  });
  
paperButton.addEventListener("click", function() {
    if(playerScore >= 5 || compScore >= 5){
        return; 
    }
    game("paper");
  });
  
scissorsButton.addEventListener("click", function() {
    if(playerScore >= 5 || compScore >= 5){
        return; 
    }
    game("scissors");
  });

  // game logic // 

function getComputerChoice(){
    const gameArr = ['Rock', 'Paper', 'Scissors']; 
    const result = getRandomString(gameArr);
    return result;
}
// function getPlayerChoice(){
   // const playerChoice = prompt("Your choice")
   // const caseIns = playerChoice.toLowerCase();
   // return caseIns;
// }

function playRound(playerSelection, computerSelection){
    
    const playerWin = ("You win! " + playerSelection + " beats " + computerSelection);
    const playerLose = ("You lose! " + computerSelection + " beats " + playerSelection)
    const playerTie = "It's a tie!";

    if(computerSelection.toLowerCase() === playerSelection.toLowerCase()){
        return playerTie; 
    }else if((computerSelection === "Rock") && (playerSelection == "paper")
            ||(computerSelection === "Scissors") && (playerSelection == "rock")
            ||(computerSelection === "Paper") && (playerSelection == "scissors")){ 
        return playerWin;

    }else if((computerSelection === "Rock") && (playerSelection == "scissors")
            ||(computerSelection === "Scissors") && (playerSelection == "paper")
            ||(computerSelection === "Paper") && (playerSelection == "rock")){
        return playerLose;
    }
}

function game(playerSelection){
    //call helper functions and declare variables 
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection,computerSelection);
    //determine output of round
    if(result === "It's a tie!"){
        console.log(playerScore)
        console.log(compScore)
        console.log("It's a tie! ");
        console.log("Score: " + playerScore + " to " + compScore);
        roundMessage.textContent = ("It's a tie!");
    }
    else if(result === ("You win! " + playerSelection + " beats " + computerSelection)){
        playerScore++; 
        console.log(playerScore)
        console.log(compScore)
        pScore.textContent = playerScore.toString(); 
        console.log("You win this round, " + playerSelection + " beats " + computerSelection); 
        roundMessage.textContent = ("You win this round, " + playerSelection + " beats " + computerSelection)
        console.log("Score: " + playerScore + " to " + compScore);
    }else if(result === ("You lose! " + computerSelection + " beats " + playerSelection)){
        compScore++;
        console.log(playerScore)
        console.log(compScore)
        cScore.textContent = compScore.toString(); 
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        console.log("Score: " + playerScore + " to " + compScore);
        roundMessage.textContent = ("You lose! " + computerSelection + " beats " + playerSelection)

        }
    //display final score
    if(playerScore >= 5){ 
        console.log(playerScore)
        gameMessage.textContent = ("You Win!")
        roundMessage.textContent = ("Final Score: " + playerScore + " to " + compScore)
        paragraph.textContent = "Click to Play Again"          
        tryAgain.appendChild(paragraph)
    }
    if (compScore >= 5){
        console.log(compScore)
        gameMessage.textContent = ("You Lose!")
        roundMessage.textContent = ("Final Score: " + playerScore + " to " + compScore)
        paragraph.textContent = "Click to Play Again"          
        tryAgain.appendChild(paragraph)
    }

}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    pScore.textContent = '0';
    cScore.textContent = '0';
    tryAgain.style.display = '';
    tryAgain.textContent = null; 
    gameMessage.textContent = null;
    roundMessage.textContent = null;
  }

//helper function
function getRandomString(arr) {
    //generates a random index based on array length
    const randomIndex = Math.floor(Math.random() * arr.length);
    //return the random string from the array
    return arr[randomIndex]; 
}
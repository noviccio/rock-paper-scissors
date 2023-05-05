function getRandomString(arr) {
    //generates a random index based on array length
    const randomIndex = Math.floor(Math.random() * arr.length);
    //return the random string from the array
    return arr[randomIndex]; 
}

function getComputerChoice(){
    const gameArr = ['Rock', 'Paper', 'Scissors']; 
    const result = getRandomString(gameArr);
    return result;
}

function getPlayerChoice(){
    const playerChoice = prompt("Your choice")
    const caseIns = playerChoice.toLowerCase();
    return caseIns;
}
function playRound(playerSelection, computerSelection){
    //PSEUDOCODE
    //if computerSelection = playerSelection, return tie
    //if computerSelection is Rock & playerSelection is Paper, 
    //return playerSelection as winner 
    //if computerSelection is Paper & playerSelection is Scissors
    //return playerSelection as winner
    //if computerSelection is Scissors & playerSelection is Paper
    //return playerSelection as winner
    //else return computerSelection as winner

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
function game(){
    //call playRound 5 times. 
    //display results of each round
    //display winner at the end of the 5 rounds 
    let compScore = 0;
    let playerScore = 0; 
    const results = [];
    while((playerScore < 5) && (compScore < 5)){ 

        const playerSelection = getPlayerChoice(); 
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection,computerSelection);
        results.push(result);

        if(result === "It's a tie!"){
            alert("It's a tie! " + "Score: " + playerScore + " to " + compScore)
        }
        else if(result === ("You win! " + playerSelection + " beats " + computerSelection)){
            playerScore++; 
            alert("You win this round, " + playerSelection + " beats " + computerSelection + ". Score: " + playerScore + " to " + compScore)
        }else if(result === ("You lose! " + computerSelection + " beats " + playerSelection)){
            compScore++;
            alert("You lose! " + computerSelection + " beats " + playerSelection + ". Score: " + playerScore + " to " + compScore)
        }
    }

    if(playerScore === 5){
        alert("You Win! Final Score: " + playerScore + " to " + compScore)
    }else
        alert(("You Lose! Final Score: " + playerScore + " to " + compScore))

}

console.log(game());
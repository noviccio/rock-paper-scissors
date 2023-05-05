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
    const gameArr = ['Rock', 'Paper', 'Scissors']; 
    const result = getRandomString(gameArr);
    return result;
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

    if(computerSelection === playerSelection){
        return "It's a tie!"
}else if((computerSelection === "Rock") && (playerSelection == "Paper")
||(computerSelection === "Scissors") && (playerSelection == "Rock")
||(computerSelection === "Paper") && (playerSelection == "Scissors")){
        return ("You win! " + playerSelection + " beats " + computerSelection)
}else if((computerSelection === "Rock") && (playerSelection == "Scissors")
||(computerSelection === "Scissors") && (playerSelection == "Paper")
||(computerSelection === "Paper") && (playerSelection == "Rock")){
        return ("You lose! " + computerSelection + " beats " + playerSelection)
    }
}


const playerSelection = getPlayerChoice(); 
const computerSelection = getComputerChoice(); 

console.log(playerSelection)
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));   
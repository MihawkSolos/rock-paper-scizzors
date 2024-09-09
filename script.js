/* 
PLAN:

- Create a function to return a random value of rock, paper or scizzors.
- get user input
- compare computer and user values
- return the result.



*/

function getComputerChoice() {
    let val = Math.floor(Math.random() * 10);
    let guess;

    if(val <= 3){
        guess = "rock";
    } else if (val > 3 && val <= 6){
        guess = "paper";
    } else if (val > 6 && val <=9){
        guess = "scizzors";
    }

    return guess;
}

// console.log(getComputerChoice());


function getHumanChoice() {
    let userVal = prompt("Enter 'Rock', 'Paper', or 'Scizzors'.");
    
    if(userVal.toLowerCase() === 'rock'){
        userVal = 'rock';
    } else if (userVal.toLowerCase() === 'paper'){
        userVal = 'paper';
     } else if (userVal.toLowerCase() === "scizzors"){
        userVal = "scizzors";
     } else {
        console.log("Invalid entry! Please try again.");
     }

    

    return userVal;
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){

    if(humanChoice === "rock" && computerChoice === "rock"){
        console.log("Tie! No one wins.") // Tie rock
    } 
    else if(humanChoice === "paper" && computerChoice === "paper"){
        console.log("Tie! No one wins.") // Tie paper
    } 
    else if(humanChoice === "scizzors" && computerChoice === "scizzors"){
        console.log("Tie! No one wins.") // Tie scizzors
    } 
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("Computer wins with paper!");
        computerScore++; // computer wins with paper > rock
    } 
    else if (humanChoice === "rock" && computerChoice === "scizzors"){
        console.log("You win!");
        humanScore++; // user wins with rock > scizzors
    } 
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win!");
        humanScore++; // user wins with paper > rock
    } 
    else if (humanChoice === "paper" && computerChoice === "scizzors"){
        console.log("Computer wins with scizzors!");
        computerScore++; // computer wins with scizzors > paper
    } 
    else if (humanChoice === "scizzors" && computerChoice === "paper"){
        console.log("You win!");
        humanScore++; // user wins with scizzors > paper
    } 
    else if (humanChoice === "scizzors" && computerChoice === "rock"){
        console.log("Computer wins with rock!");
        computerScore++; // computer wins with rock > scizzors
    } 

}




function playGame() {
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("Final score: Computer = " + computerScore + "\tUser = " + humanScore);
    if(computerScore > humanScore){
        console.log("Computer wins!!!");
    } else if(humanScore > computerScore){
        console.log("User wins!!!");
    } else {
        console.log("Tie!!!");
    }

}

playGame();
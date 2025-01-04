/* 
PLAN:

- Create a function to return a random value of rock, paper or scizzors.
- get user input
- compare computer and user values
- return the result.



*/

// BUTTONS

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scizButton = document.querySelector('.scizzors');

function callPlayRound(value) {
    playRound(value, getComputerChoice());
}

rockButton.addEventListener("click",() => callPlayRound(rockButton.value))
paperButton.addEventListener("click",() => callPlayRound(paperButton.value))
scizButton.addEventListener("click",() => callPlayRound(scizButton.value))
// BUTTONS

// div section

const results = document.querySelector('.results');
const text = document.createElement('p');
const scoreDiv = document.querySelector('.score');
const score = document.createElement('p');

text.textContent = '';
results.appendChild(text);

score.textContent = '';
scoreDiv.appendChild(score);


// div section




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

// function is currently replaced with the butons
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
        text.textContent = "Tie! Both chose rock, no one wins."; // Tie rock
    } 
    else if(humanChoice === "paper" && computerChoice === "paper"){
        text.textContent = "Tie! Both chose paper, no one wins."; // Tie paper
    } 
    else if(humanChoice === "scizzors" && computerChoice === "scizzors"){
        text.textContent = "Tie! Both chose scizzors, no one wins."; // Tie scizzors
    } 
    else if (humanChoice === "rock" && computerChoice === "paper"){
        text.textContent = "Computer wins with paper!";
        computerScore++; // computer wins with paper > rock
    } 
    else if (humanChoice === "rock" && computerChoice === "scizzors"){
        text.textContent = "Computer chooses scizzors. You win! ";
        humanScore++; // user wins with rock > scizzors
    } 
    else if (humanChoice === "paper" && computerChoice === "rock"){
        text.textContent = "Computer chooses rock. You win!";
        humanScore++; // user wins with paper > rock
    } 
    else if (humanChoice === "paper" && computerChoice === "scizzors"){
        text.textContent = "Computer wins with scizzors!";
        computerScore++; // computer wins with scizzors > paper
    } 
    else if (humanChoice === "scizzors" && computerChoice === "paper"){
        text.textContent = "Computer chooses paper. You win!";
        humanScore++; // user wins with scizzors > paper
    } 
    else if (humanChoice === "scizzors" && computerChoice === "rock"){
        text.textContent = "Computer wins with rock!";
        computerScore++; // computer wins with rock > scizzors
    } 

    score.textContent = 'You: ' + humanScore + ' | ' + '\tComputer: ' + computerScore;
    //score.textContent = "Score: Computer = " + computerScore + "\tUser = " + humanScore;
    if (computerScore > humanScore && computerScore === 5) {
        score.textContent = "Computer wins!!!";
        score.classList.add('jumping-text');

        replaceButtons();
    } else if (humanScore > computerScore && humanScore === 5) {
        score.textContent = "User wins!!!";
        score.classList.add('jumping-text');

        replaceButtons();
    }
    
    // Remove the animation class after the animation completes
    score.addEventListener('animationend', () => {
        score.classList.remove('jumping-text');
    });
    
}

// Function to replace the buttons with a "New Game" button
function replaceButtons() {
    const btnsContainer = document.querySelector('.btnsContainer');

    // Clear the existing buttons
    btnsContainer.innerHTML = '';

    // Create the "New Game" button
    const newGameButton = document.createElement('button');
    newGameButton.textContent = "New Game";
    newGameButton.className = "new-game";
    btnsContainer.appendChild(newGameButton);

    // Add event listener to reset the game
    newGameButton.addEventListener('click', resetGame);
}

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    text.textContent = '';
    score.textContent = 'You: 0 | Computer: 0';

    // Recreate the original buttons
    const btnsContainer = document.querySelector('.btnsContainer');
    btnsContainer.innerHTML = `
        <button value="rock" class="rock">Rock</button>
        <button value="paper" class="paper">Paper</button>
        <button value="scizzors" class="scizzors">Scizzors</button>
    `;

    // Reassign event listeners to the new buttons
    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scizButton = document.querySelector('.scizzors');

    rockButton.addEventListener("click", () => callPlayRound(rockButton.value));
    paperButton.addEventListener("click", () => callPlayRound(paperButton.value));
    scizButton.addEventListener("click", () => callPlayRound(scizButton.value));
}




// this function isnt being used rn
function playGame() {
    /*
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    */
    playRound(getHumanChoice(), getComputerChoice());

    console.log("Final score: Computer = " + computerScore + "\tUser = " + humanScore);
    if(computerScore > humanScore){
        console.log("Computer wins!!!");
    } else if(humanScore > computerScore){
        console.log("User wins!!!");
    } else {
        console.log("Tie!!!");
    }

}

//playGame();
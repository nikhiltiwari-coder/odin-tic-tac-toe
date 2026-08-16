console.log("Tic,Tac,Toe");

//functions which will return the computer choice
function getComputerChoice() {
    let a = Math.random() * 10;
    // console.log(a);

    if (a >= 0.0 && a < 3.3) {
        return "rock";
    }
    else if (a >= 3.3 && a < 6.6) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


const UserInput = prompt("Enter your choice: rock, paper, scissors");

//function which will return the human choice
function getHumanChoice(userInput) {
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    }
    else {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
        return null;
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    console.log("You choose: " + humanChoice);
    console.log("Computer chooses: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log("You win this round!");
    }
    else {
        computerScore++;
        console.log("you lose this round!");
    }
}
playRound(getHumanChoice(UserInput), getComputerChoice());

console.log(`the score is: Human: ${humanScore}, Computer: ${computerScore}`);
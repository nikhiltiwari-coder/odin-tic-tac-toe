console.log("Tic,Tac,Toe");

//functions which will return the computer choice
function getComputerChoice() {
    let a = Math.random() * 10;

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


function getChoiceIcon(choice) {

    if (choice === "rock") {
        return "✊";
    }
    else if (choice === "paper") {
        return "✋";
    }
    else {
        return "✌️";
    }
}


// const UserInput = prompt("Enter your choice: rock, paper, scissors");

// //function which will return the human choice
// function getHumanChoice(userInput) {
//     if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
//         return userInput;
//     }
//     else {
//         console.log("Invalid input. Please enter rock, paper, or scissors.");
//         return null;
//     }
// }




let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function playRound(humanChoice, computerChoice) {
    if (rounds >= 7) {
    return;
}

    rounds++;

    humanChoiceDisplay.textContent = getChoiceIcon(humanChoice);
    computerChoiceDisplay.textContent = getChoiceIcon(computerChoice);

    console.log("You choose: " + humanChoice);
    console.log("Computer chooses: " + computerChoice);

    if (humanChoice === computerChoice) {
        resultDisplay.textContent = "It's a Tie! 🤝";
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
         resultDisplay.textContent = "You Win This Round! 🎉";
    }
    else {
        computerScore++;
        resultDisplay.textContent = "Computer Wins This Round! 💻";
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    roundDisplay.textContent = rounds;

    if (rounds === 7) {

    if (humanScore > computerScore) {
        resultDisplay.textContent =
            `🏆 You Win! Final Score: ${humanScore} - ${computerScore}`;
    }
    else if (computerScore > humanScore) {
        resultDisplay.textContent =
            `💻 Computer Wins! Final Score: ${humanScore} - ${computerScore}`;
    }
    else {
        resultDisplay.textContent =
            `🤝 It's a Draw! Final Score: ${humanScore} - ${computerScore}`;
    }
}
}


const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
const scissors = document.getElementById("scissor");
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
// playRound(getHumanChoice(UserInput), getComputerChoice());

// console.log(`the score is: Human: ${humanScore}, Computer: ${computerScore}`);

const humanScoreDisplay = document.getElementById("hum");
const computerScoreDisplay = document.getElementById("com");
const roundDisplay = document.getElementById("rou");

const humanChoiceDisplay = document.getElementById("humanChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");

const resultDisplay = document.getElementById("result");

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {

    humanScore = 0;
    computerScore = 0;
    rounds = 0;

    humanScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    roundDisplay.textContent = 0;

    humanChoiceDisplay.textContent = "👍";
    computerChoiceDisplay.textContent = "👍";

    resultDisplay.textContent = "Start the game!";
});
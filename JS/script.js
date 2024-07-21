let humanScore = 0,
    computerScore = 0;

const options = {
    "rock" : 0,
    "paper" : 1,
    "scissors": 2
};
    
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, Scissors").toLowerCase();
    return options[choice];
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice === undefined) {
        console.log("invalid input");
    } else {
        if (humanChoice === computerChoice) {
            console.log("It's a Draw");
        } else if ((humanChoice + 1) % 3 === computerChoice) {
            ++computerScore;
            console.log("You lose");
        } else {
            ++humanScore;
            console.log("You win");
        }
    }
}

let round = 0;
function playGame(){
    while(round < 5){
        playRound()
        ++round;
        console.log(`Round ${round}: Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
}
playGame();

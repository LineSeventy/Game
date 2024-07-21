let humanScore = 0,
    computerScore = 0;

const rock = 0,
     paper = 1,
     scissor = 2;    
    
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(){
    return prompt("Rock,Paper,Scissor").toLowerCase();
}
console.log(getHumanChoice())
 alert(getComputerChoice())
function playRound(humanChoice, computerChoice){
    if(humanChoice > computerChoice){
        console.log("You win");
    }
    else if (humanChoice === computerChoice ){
            console.log("Draw")
    }
    else {
        console.log("You Lose")
    }
}
const humanSelection    = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanChoice, computerChoice);

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

function playRound(humanChoice, computerChoice){
    
}


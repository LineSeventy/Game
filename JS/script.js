let humanScore = 0,
    computerScore = 0,
    round = 0;

    let Status = document.querySelector(".statusDisplay");    
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound() {
    let humanChoice;

    let rock = document.querySelector(".rockBtn");
    let paper = document.querySelector(".paperBtn");
    let scissor = document.querySelector(".scissorBtn");

    rock.addEventListener("click", () => handleChoice(0));
    paper.addEventListener("click", () => handleChoice(1));
    scissor.addEventListener("click", () => handleChoice(2));
}

function handleChoice(humanChoice) {
    if (round < 5) {
        let computerChoice = getComputerChoice();
        calcResult(humanChoice, computerChoice);

        round++;
        let roundScore = document.querySelector(".roundScore");
        roundScore.textContent = "Your Score: " + humanScore;
        
        let roundDisplay = document.querySelector(".roundDisplay");
        roundDisplay.textContent = "Round: " + round;
        if (round === 5) {
          Status.textContent = "Game over! Final score - Human: " + humanScore + "| Computer: " + computerScore;
        }
    }
}

function calcResult(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        Status.textContent = "It's a Draw";
    } else if ((humanChoice + 1) % 3 === computerChoice) {
        ++computerScore;
        Status.textContent = "You lose";
    } else {
        ++humanScore;
        Status.textContent = "You win";
    }
}

function playGame() {
    playRound();
}

playGame();

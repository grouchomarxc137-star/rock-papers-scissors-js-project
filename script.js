"use strict";

// playing an entire game 
let playGame = () => {
    let p = prompt("Type 's' for scissors, 'r' for rock, 'p' for paper: ");
    let humanChoice = (getHumanChoice(p));
    // generating computer choice
    let computerChoice = getComputerChoice();
    //playing a round
    console.log(humanChoice, computerChoice);
    let roundWinner = playRound(computerChoice, humanChoice);
    switch(roundWinner){
        case "human":
            humanScore++;
            console.log(`You won the round! the score is Player: ${humanScore} , Computer: ${computerScore}`);
            break;
        case "computer":
            computerScore++;
            console.log(`You lost the round! the score is Player: ${humanScore} , Computer: ${computerScore}`);
            break;
        case "draw":
            console.log(`You drawed! the score is Player: ${humanScore} , Computer: ${computerScore}`);
            break;
        default:
            console.log("Undefined roundWinner input!");
    }
}

// declaring variables
let computerScore = 0;
let humanScore = 0;
let roundWinner = "";

// function for playing a round
let playRound = (hc, cc) => {
    if (hc == "rock" && cc == "scissors" || hc == "paper" && cc == "rock" || hc == "scissors" && cc == "paper"){
        roundWinner = "human";
        humanScore++;
    }
    else if (hc === cc)
    {
        roundWinner = "draw";
    }
    else{
        roundWinner = "computer"
        computerScore++;
    }
    updateScoreMessage(hc, cc, roundWinner);
}
// function for generating the computer choice
let getComputerChoice = () => {
    let n = Math.random();
    let computerChoice;
    if ((n <= 0.3))
    {
        computerChoice = "rock";
    }
    else if (n >= 0.3 && n <= 0.7)
    {
        computerChoice = "paper"
    }
    else{
        computerChoice = "scissors"
    }
    return computerChoice;
}
// getting the ui elements by id
const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");
const playerSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");
const humanScoreP = document.getElementById("humanScore");
const computerScoreP = document.getElementById("computerScore");
// updating the score function
function updateScore() {
  if (roundWinner === 'draw') {
    scoreInfo.textContent = "It's a tie!"
  } else if (roundWinner === 'human') {
    scoreInfo.textContent = 'You won!'
  } else if (roundWinner === 'computer') {
    scoreInfo.textContent = 'You lost!'
  }

  playerScoreP.textContent = `Player: ${playerScore}`
  computerScoreP.textContent = `Computer: ${computerScore}`
}
// updating the score message
function updateScoreMessage(hc, cc, roundWinner) {
  if (roundWinner === 'player') {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      hc
    )} beats ${cc.toLowerCase()}`
    return
  }
  if (roundWinner === 'computer') {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      hc
    )} is beaten by ${cc.toLowerCase()}`
    return
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(
    hc
  )} ties with ${cc.toLowerCase()}`
}
rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))

function handleClick(playerSelection) {
  if (isGameOver()) {
    openEndgameModal()
    return
  }

  const computerSelection = getRandomChoice()
  playRound(playerSelection, computerSelection)
  updateChoices(playerSelection, computerSelection)
  updateScore()

  if (isGameOver()) {
    openEndgameModal()
    setFinalMessage()
  }
}
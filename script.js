// creating elements for clickables
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const playerScoreP = document.getElementById("playerScore");
const computerScoreP = document.getElementById("computerScore");
const computerSignP = document.getElementById("computerSign");
const playerSignP = document.getElementById("playerSign");
const roundStatus = document.getElementById("roundStatus");
const roundInfo = document.getElementById("roundInfo");


let playerScore = 0, computerScore = 0, roundWinner="";

// button events
const rockBtnClicked = rockBtn.addEventListener("click", (e) => {
  let playerSign = e.currentTarget.value;
  playRound(playerSign);
})
const paperBtnClicked = paperBtn.addEventListener("click", (e) => {
  let playerSign = e.currentTarget.value;
  playRound(playerSign);
})
const scissorsBtnClicked = scissorsBtn.addEventListener("click", (e) => {
  let playerSign = e.currentTarget.value;
  playRound(playerSign);
})

// logic for playing one round
const playRound = (playerSign) => {
  let computerGeneratedSign = generateComputerSign();
  roundWinner = findWinner(playerSign, computerGeneratedSign);
  console.log(playerScore, computerScore);
  updateDisplaySigns(playerSign, computerGeneratedSign);
  updateDisplayScores();
  updateDisplayRoundWinner();
  updateDisplayRoundInfo(playerSign, computerGeneratedSign);
  checkGameOver();
}










// logic for generating the computer sign
const generateComputerSign = () => {
  let computerGeneratedSign;
  let n = Math.floor(Math.random() * 3) + 1;
  if (n==1){
    computerGeneratedSign = "rock";
  }
  else if (n==2){
    computerGeneratedSign = "paper";
  }
  else{
    computerGeneratedSign = "scissors";
  }
  return computerGeneratedSign;
}
// logic for finding out the winner
const findWinner = (playerSign, computerGeneratedSign) => {
  let roundWinner;
  if (playerSign == "rock" && computerGeneratedSign == "scissors" ||
    playerSign == "paper" && computerGeneratedSign == "rock" ||
    playerSign == "scissors" && computerGeneratedSign == "paper"
  ){
    roundWinner = "Player";
    playerScore++;
  }
  else if (playerSign == "rock" && computerGeneratedSign == "paper" ||
    playerSign == "paper" && computerGeneratedSign == "scissors" ||
    playerSign == "scissors" && computerGeneratedSign == "rock"
  ){
    roundWinner = "Computer";
    computerScore++;
  }
  else{
    roundWinner = "Draw";
  }
  return roundWinner;
}
// logic to update the displayed signs instead of the interrogation points
const updateDisplaySigns = (playerSign, computerGeneratedSign) => {
  switch(playerSign){
    case "rock":
      playerSignP.textContent = "✊";
      break;
    case "paper":
      playerSignP.textContent = "✋";
      break;
    case "scissors":
      playerSignP.textContent = "✌";
      break
  }
  switch(computerGeneratedSign){
    case "rock":
      computerSignP.textContent = "✊";
      break;
    case "paper":
      computerSignP.textContent = "✋";
      break;
    case "scissors":
      computerSignP.textContent = "✌";
      break
  }
}
// logic to update the display scores
const updateDisplayScores = () => {
  playerScoreP.textContent = `Player: ${playerScore}`;
  computerScoreP.textContent = `Computer: ${computerScore}`;
}
// logic to update the display round winner
const updateDisplayRoundWinner = () => {
  switch(roundWinner){
    case "Player":
      roundStatus.textContent = "Player won this round!";
      break;
    case "Computer":
      roundStatus.textContent = "Computer won this round!";
      break;
    case "Draw":
      roundStatus.textContent = "This round is a draw!"
      break;
    default:
      roundStatus.textContent = "What the hell did you break ?"
  }
}
// logic to update the round display info
const updateDisplayRoundInfo = (playerSign, computerGeneratedSign) => {
  if (roundWinner == "Player"){
    roundInfo.textContent = `${playerSign} beats ${computerGeneratedSign}!`;
  }
  else if (roundWinner == "Computer"){
    roundInfo.textContent = `${playerSign} loses to ${computerGeneratedSign}!`;
  }
  else{
    roundInfo.textContent = `${playerSign} draws with ${computerGeneratedSign}`;
  }
}
// logic to check if the game is over or not
const checkGameOver = () => {
  let gameWinner = "";
  if (playerScore == 5){
    gameWinner = "Player";
  }
  else if (computerScore == 5){
    gameWinner = "Computer";
  }
  if (gameWinner!=""){
    // Create the overlay background
// Create the overlay background
let overlay = document.createElement("div");
overlay.style = `
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

// Create the modal box
let modal = document.createElement("div");
modal.style = `
  background: #222831;
  padding: 25px 40px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  text-align: center;
  font-family: sans-serif;
`;

// Create the message
let message = document.createElement("p");
message.textContent = "Game Over! Want to restart?";
message.style.marginBottom = "15px";
message.style.color = "white";

// Create the restart button (yellow)
let restartBtn = document.createElement("button");
restartBtn.textContent = "Restart";
restartBtn.style = `
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #ffcc00; /* yellow */
  color: white;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
`;

// Add hover effect
restartBtn.addEventListener("mouseover", () => {
  restartBtn.style.backgroundColor = "#e6b800"; // darker yellow
});
restartBtn.addEventListener("mouseout", () => {
  restartBtn.style.backgroundColor = "#ffcc00";
});

// Remove overlay when clicked
restartBtn.addEventListener("click", () => {
  overlay.remove();
});

// Assemble everything
modal.appendChild(message);
modal.appendChild(restartBtn);
overlay.appendChild(modal);
document.body.appendChild(overlay);


    //------------------------------------------------
    playerScore = 0;
    computerScore = 0;
    playerSignP.textContent = "?";
    computerSignP.textContent = "?";
    playerScoreP.textContent = "Player: 0";
    computerScoreP.textContent = "Computer: 0";
    roundStatus.textContent = "Choose your weapon";
    roundInfo.textContent = "First to score 5 points wins the game";
  }
}

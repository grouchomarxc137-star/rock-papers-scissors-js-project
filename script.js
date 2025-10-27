"use strict";
// computer choice between 0 and 0.3 : rock | between 0.3 and 0.7 : paper | else: scissors
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
// human choice, p = papers, s = scissors, r = rock; assuming the human will always input valid input
let getHumanChoice = (input) => {
    let humanChoice;
    switch(input){
        case "p":
            humanChoice = "paper";
            break;
        case "r":
            humanChoice = "rock";
            break;
        case "s":
            humanChoice = "scissors";
            break;
        default:
            humanChoice = "N/A";
    }
    return humanChoice;
}
// Playing a round, determining the winner and returning it
let playRound = (cc, hc) => {
    let roundWinner;
    if (hc == "rock" && cc == "scissors" || hc == "paper" && cc == "rock" || hc == "scissors" && cc == "paper"){
        roundWinner = "human";
    }
    else if (hc === cc)
    {
        roundWinner = "draw";
    }
    else{
        roundWinner = "computer"
    }
    return roundWinner;

}
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
// main program
// initializing human and computer scores
let humanScore = 0;
let computerScore = 0;
// initializing round counter
let roundCounter = 0;
// initialzing a loop to play until 5 rounds are played
while(roundCounter<5){
    playGame();
    roundCounter++;
}
let gameWinner
if (humanScore > computerScore){
    gameWinner = "human"
}
else if(humanScore == computerScore)
    {
        gameWinner = "draw"
    }
else{
    gameWinner = "computer"
} 
if (gameWinner == "human"){
    console.log(`Congratz! you've won the game with score : Player: ${humanScore} , Computer: ${computerScore}`);
}
else if (gameWinner=="draw"){
    console.log(`you've drawed the game with score : Player: ${humanScore} , Computer: ${computerScore}`);
}
else{
    console.log(`Mannaggia! you've lost the game with score : Player: ${humanScore} , Computer: ${computerScore}`);
}

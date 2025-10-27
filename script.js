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
let p = prompt("Type 's' for scissors, 'r' for rock, 'p' for paper: ");
console.log(getHumanChoice(p));

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
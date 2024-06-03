function getComputerChoice(){
    let computer;
    computer = Math.floor(Math.random()*3);
    if(computer === 0){
        return "rock";
    }
    else if(computer === 1){
        return "paper";
    }
    else if(computer === 2){
        return "scissors";
    }
}
function getHumanChoice(){
    let human;
    human = prompt("rock paper scissors");
    return human;
}
let humanScore = 0;
let computerScore = 0;
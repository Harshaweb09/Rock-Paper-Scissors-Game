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

function playRound(humanChoice,computerChoice){
    if (humanChoice === computerChoice){
        console.log('"Both are draw"');
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if ((humanChoice == "scissors" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors")){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else{
        console.log("Error occured! try again");
    }
}

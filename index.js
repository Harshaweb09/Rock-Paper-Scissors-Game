alert(To play the hit ctrl + shift + j);
console.log(`To start the game type playGame() and hit enter`);
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
    return human.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    if (humanChoice === computerChoice){
        console.log('Same choice by both of u');
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

function playGame(){
    let rounds = +prompt(`Enter number 0f rounds(Odd number only)`);
    for(let i = 0; i < rounds; i++){
        playRound(getHumanChoice(),getComputerChoice())
    }
    if(humanScore == computerScore){
        console.log(`Both are draw`);
        console.log(`your score ${humanScore}`);
        console.log(`your score ${computerScore}`);
    }
    else if(humanScore > computerScore){
        console.log(`you won the game! by ${humanScore - computerScore} points`);
        console.log(`your score ${humanScore}`);
        console.log(`your score ${computerScore}`);
    }
    else if(humanScore < computerScore){
        console.log(`you lost the game! Best of LUCK! try again`)
        console.log(`your score ${humanScore}`);
        console.log(`your score ${computerScore}`);
    }
    else{
        console.log(`Error occured! try again`);
    }
}

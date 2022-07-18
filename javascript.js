function getComputerChoice(){
    let x = Math.random()*3;
    x = Math.floor(x);
    if (x===0){
        return "rock";
    } else if (x===1){
        return "paper";
    } else {
        return "scissors";
    }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

function playerSelection(){
    let choice;
    do {
        choice = prompt("Enter your choice:");
        choice = choice.toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    console.log(choice);
}

let playerChoice = playerSelection();
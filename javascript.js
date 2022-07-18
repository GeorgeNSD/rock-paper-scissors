function getComputerChoice(){
    let x = Math.random()*3;
    x = Math.floor(x);
    if (x===0){
        return "Rock";
    } else if (x===1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

function playerSelection(){
    let choice;
    do {
        choice = prompt("Enter your choice:");
        choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    } while (choice !== "Rock" && choice !== "Paper" && choice !== "Scissors");
    return choice;
}

let playerChoice = playerSelection();
console.log(playerChoice);

function whoWins(cChoice, pChoice){
    if (cChoice === pChoice){
        console.log(`Draw! You both picked ${cChoice}!`);
    } else if (cChoice === "Rock" && pChoice === "Paper" || cChoice === "Paper" && pChoice === "Scissors" || cChoice === "Scissors" && pChoice === "Rock"){
        console.log(`You Win! ${pChoice} beats ${cChoice}`)
    } else {
        console.log(`You lose! ${cChoice} beats ${pChoice}`)
    }
}

whoWins(computerChoice, playerChoice);
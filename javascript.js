function getComputerChoice(){
    let x = Math.random()*3;
    return Math.floor(x);
}

let computerChoice = getComputerChoice();
console.log(computerChoice)
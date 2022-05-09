//make an array of paper, rock and scissors

let paperRockScissors = ['paper', 'rock', 'scissors'];

//create a function to choose a selection at random

function computerPlay() {
    return paperRockScissors[Math.floor(Math.random()*paperRockScissors.length)];
}

let playerSelection = prompt("Do you want to choose rock, paper, or scissors?");
let computerSelection = computerPlay();
console.log(computerSelection);
console.log(playerSelection);
let x = playerSelection.toLowerCase();
let y = computerSelection.toLowerCase();
function game() {
    
    
    

   if (x===y) {
       return "draw!";
   
    }else if (x === "rock" && y === "scissors") {
       return "you win!";
    
    }else if (x === "scissors" && y ==="paper") {
        return "you win!";
    }else if (x === "paper" && y === "rock") {
        return 'you win!';
    
    }else {
        return "You lose!";
    }

    }
console.log(game());


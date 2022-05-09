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

//create one round of paper rock scissors
function playRound() {

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
console.log(playRound());

//we've created a function for a round.  Now we need to create a best of five game
//make a loop to run the game five times
//need to keep score of those games
//and the score needs to be used to declare a winner.

//loop
    for (i=0; i < 5; i++) {
        let playerSelection = prompt("Do you want to choose rock, paper, or scissors?");
        let computerSelection = computerPlay();
        let x = playerSelection.toLowerCase();
        let y = computerSelection.toLowerCase();
        playRound();

    }


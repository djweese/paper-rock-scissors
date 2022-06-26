//make an array of paper, rock and scissors

let paperRockScissors = ['paper', 'rock', 'scissors'];

//create a function to choose a selection at random

function computerPlay() {
    return paperRockScissors[Math.floor(Math.random()*paperRockScissors.length)];
}



let playerScore = 0;
let computerScore = 0;

//create one round of paper rock scissors
//changed this function to keep score rather than declare a winner

const buttons = document.querySelectorAll('button');
const rockBtn=document.getElementById('#rock');
const paperBtn=document.getElementById('#paper');
const scissorsBtn=document.getElementById('#scissors');


buttons.forEach((button) => {
    button.addEventListener('click',(e) => {
       playerSelection=e.target.id;
       playRound();
       
       console.log(playerScore);
       console.log(computerScore);
    });
    
});
const cs = document.querySelector('#computerScore');
const ps = document.querySelector('#playerScore');
function winner() {
    
    if (playerScore == 5) {
        results.textContent = "The player wins!";
    }else if (computerScore == 5) {
        results.textContent = "The computer wins!";
    }
}
function playRound() {
   
    console.log(playerSelection);
    let x = playerSelection;
    let computerSelection = computerPlay();
    let y = computerSelection.toLowerCase();
   
    if (x===y) {
       return "draw!";
   
    }else if (x === "rock" && y === "scissors") {
       playerScore += 1;
    
    }else if (x === "scissors" && y ==="paper") {
        playerScore += 1;

    }else if (x === "paper" && y === "rock") {
        playerScore += 1;
    
    }else {
       computerScore +=1;
    }

for (i=0; i<6; i++) {
    cs.textContent = "Computer: " + computerScore;
}

for (i=0; i<6; i++) {
    ps.textContent = "Player: " + playerScore;
}
winner();

    }
function reset() {
    playerScore = 0;
    computerScore = 0;
}
function gameEnd() {
    if (playerScore >=5 || computerScore >=5) {
        reset();
    }
}
gameEnd();
//fix this.  score always starts with the condition in the if statement.


//need to create a div and keep track of score in it




//we've created a function for a round.  Now we need to create a best of five game
//make a loop to run the game five times
//need to keep score of those games
//and the score needs to be used to declare a winner.
//function game() {
//loop
//    for (i=0; i < 5; i++) {
//      playRound();
//   }
//declare winner
//        function score() {
//            if (playerScore > computerScore) {
  //              return "You are the winner!";
    //        }else if (playerScore < computerScore) {
      //          return "The computer is the winner!"
        //    }else {
          //      return "DRAW!";
            //}
      //  }
  //  return score();  
//}
//console.log(game());
//console.log(playerScore);
//console.log(computerScore);
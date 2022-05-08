//make an array of paper, rock and scissors

let paperRockScissors = ['paper', 'rock', 'scissors'];

//create a function to choose a selection at random

function computerPlay() {
    return paperRockScissors[Math.floor(Math.random()*paperRockScissors.length)];
}
console.log(computerPlay());

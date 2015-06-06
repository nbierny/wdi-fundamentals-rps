////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

//Prompt player until accepted move is entered
while ((playerMove!='rock') && (playerMove!='paper') && (playerMove!='scissors')) {
	playerMove=getPlayerMove('');
}
console.log("Player chose " + playerMove);

//Prompt computer until accepted move is entered
while ((computerMove!='rock') && (computerMove!='paper') && (computerMove!='scissors')) {
computerMove=getComputerMove('');
}
console.log("Computer chose " + computerMove);

//Determine winner based on rules of game
if (playerMove==computerMove) {
	winner='tie';
}	else if ((playerMove=='rock') && (computerMove=='scissors')) {
		winner='player'; 
}
	else if ((playerMove=='scissors') && (computerMove=='paper')) {
		winner='player';
}
	else if ((playerMove=='paper') && (computerMove=='rock')) {
		winner='player';
}
	else winner='computer';

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

    var winner='';
    while ((playerWins<5) && (computerWins<5)) {
	winner=getWinner('','');
	if (winner=='player') {
		playerWins+=1;
                console.log("playerWins = " + playerWins);
		console.log("winner = " + winner);
	} else if (winner=='computer') {
		computerWins+=1;
                console.log("computerWins= " + computerWins);
		console.log("winner = " + winner);
	}
    console.log('');
    }
    return [playerWins, computerWins];
}

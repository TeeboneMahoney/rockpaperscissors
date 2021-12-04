
/* Computer making its selection of weapon -- function */

let compOptions = ['rock', 'paper', 'scissors'];

function computerPlay(arr) {
    return arr[Math.floor(Math.random()*3)]; 
}


let playerSelection;
let computerSelection;

/* Checking to see if the weapon the player chose is valid -- function */

function checkWeapon() {
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
        return;
    } else {
        playerSelection = prompt("Choose a different weapon.").toLowerCase();
        checkWeapon(playerSelection);
    }
    return playerSelection;
}


/* Play a round of rock, paper, scissors and keep track of the winners */

let playerWins = 0;
let computerWins = 0;

function playARound() {
    computerPlay(compOptions);
    computerSelection = computerPlay(compOptions);    
    playerSelection = prompt("Choose your weapon, Champion!").toLowerCase();
    checkWeapon(playerSelection);

    if (playerSelection == 'rock' && computerSelection == 'paper') {
            computerWins++;
            return "You chose, poorly.";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerWins++;
        return "You chose, wisely.";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerWins++;
        return "You chose, poorly.";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerWins++;
        return "You chose, wisely.";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerWins++;
        return "You chose, poorly";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerWins++;
        return "You chose, wisely.";
    } else {
        return "You have tied this round.";
    }
}



/* Play a series of rounds and keep track of the winners */


function game() {
    while (playerWins < 5 && computerWins < 5) {
        playARound();
        if (playerSelection === computerSelection) {
            console.log("Tie.");
        }
        console.log("The player has chosen: " + playerSelection + ".");
        console.log("The computer has chosen: " + computerSelection + ".");
        console.log("Player has won: " + playerWins + " times.");
        console.log("Computer has won: " + computerWins + " times.");
    }
}

game();

function declareWinner() {
    if (playerWins == 5) {
        console.log("You are the BIG winner!")
    } else {
        console.log("You lost to a machine. You make me sick.")
    }
}
declareWinner();

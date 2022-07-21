
/* Computer making its selection of weapon -- function */

let compOptions = ['rock', 'paper', 'scissors'];

function computerPlay(arr) {
    return arr[Math.floor(Math.random()*3)]; 
}


let playerSelection;
let computerSelection;

/* Checking to see if the weapon the player chose is valid -- function */

/* function checkWeapon() {
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
        return;
    } else {
        playerSelection = prompt("Choose a different weapon.").toLowerCase();
        checkWeapon(playerSelection);
    }
    return playerSelection;
}

*/

/* Play a round of rock, paper, scissors and keep track of the winners */

let playerWins = 0;
let computerWins = 0;

/* function playARound() {
    computerPlay(compOptions);
    computerSelection = computerPlay(compOptions);    
    // playerSelection = prompt("Choose your weapon, Champion!").toLowerCase(); 
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


/* function game() {
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

*/

function declareWinner() {
    if (playerWins !== 5 & computerWins !== 5) {
        return;
    } else if (playerWins == 5) {
        const p = document.createElement('p');
        p.textContent = "YOU WIN!"
        div.appendChild(p);
    } else if (computerWins == 5) {
        const p = document.createElement('p');
        p.textContent = "MACHINE WINS"
        div.appendChild(p);

    }
}



// Revisiting Rock Paper Scissors, using DOM and Event Listeners


const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', playARound));

function playARound(e) {
    computerPlay(compOptions);
    computerSelection = computerPlay(compOptions);    
    playerSelection = this.id;
    /* checkWeapon(playerSelection); */

const div = document.querySelector('#results');

    
    if (playerSelection == 'rock' && computerSelection == 'paper') {
            computerWins++;
        const p = document.createElement('p');
        p.textContent = "You chose, poorly." + " Player: " + playerWins + " Computer: " + computerWins;
        div.appendChild(p);
        //div.textContent += "You chose, poorly." + " Player: " + playerWins + " Computer: " + computerWins;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            playerWins++;
        const p = document.createElement('p');
        p.textContent = "You chose, wisely." + " Player: " + playerWins + " Computer: " + computerWins;
        div.appendChild(p);
        //div.textContent += "You chose, wisely." + " Player: " + playerWins + " Computer: " + computerWins;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerWins++;
        const p = document.createElement('p');
        p.textContent = "You chose, poorly." + " Player: " + playerWins + " Computer: " + computerWins;
        div.appendChild(p);
        //div.textContent += "You chose, poorly." + " Player: " + playerWins + " Computer: " + computerWins;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerWins++;
        const p = document.createElement('p');
        p.textContent = "You chose, wisely." + " Player: " + playerWins + " Computer: " + computerWins;
        div.appendChild(p);
        //div.textContent += "You chose, wisely." + " Player: " + playerWins + " Computer: " + computerWins;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerWins++;
        const p = document.createElement('p');
        p.textContent = "You chose, poorly" + " Player: " + playerWins + " Computer: " + computerWins;
        div.appendChild(p);
        //div.textContent += "You chose, poorly" + " Player: " + playerWins + " Computer: " + computerWins;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            playerWins++;
        const p = document.createElement('p');
        p.textContent = "You chose, wisely." + " Player: " + playerWins + " Computer: " + computerWins;
        div.appendChild(p);
        //div.textContent += "You chose, wisely." + " Player: " + playerWins + " Computer: " + computerWins;
    } else {
            const p = document.createElement('p');
        p.textContent = "You have tied this round." + " Player: " + playerWins + " Computer: " + computerWins;
        div.appendChild(p);
        //div.textContent += "You have tied this round." + " Player: " + playerWins + " Computer: " + computerWins;
    
    }

declareWinner();

}



function declareWinner() {

const div = document.querySelector('#results');

    if (playerWins !== 5 && computerWins !== 5) {
        return;
    } else if (playerWins == 5) {
        const p = document.createElement('p');
        p.textContent = "YOU WIN!";
        div.appendChild(p);
    } else if (computerWins == 5) {
        const p = document.createElement('p');
        p.textContent = "MACHINE WINS";
        div.appendChild(p);
    }
}






























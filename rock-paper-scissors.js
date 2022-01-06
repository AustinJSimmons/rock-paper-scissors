function computerPlay() {
    let choice;
    let random = Math.floor(Math.random()*100) + 1;
    
    if (random <= 33) {
        choice = 'ROCK';
    } else if (random <= 66) {
        choice = 'PAPER';
    } else {
        choice = 'SCISSORS';
    }
    return choice;
}

function round(playerSelection = prompt('Choose: Rock, Paper, or Scissors...'), computerSelection = computerPlay()) {
    let decision;
    playerSelection = playerSelection.toUpperCase();
    if (computerSelection === "ROCK") {
        switch (playerSelection) {
            case 'SCISSORS':
                decision = 'You LOSE... Rock beats Scissors';
                break;
            case 'PAPER':
                decision = 'You WIN! Paper beats Rock';
                break;
            default:
                decision = 'Tie game!';
        }
    } else if (computerSelection === 'PAPER') {
        switch (playerSelection) {
            case 'ROCK':
                decision = 'You LOSE... Paper beats Rock';
                break;
            case 'SCISSORS':
                decision = 'You WIN! Scissors beats Paper';
                break;
            default:
                decision = 'Tie game!';
        }
    } else {
        switch (playerSelection) {
            case 'PAPER':
                decision = 'You LOSE... Scissors beats Paper';
                break;
            case 'ROCK':
                decision = 'You WIN! Rock beats Scissors';
                break;
            default:
                decision = 'Tie game!';
        }
    }
    return decision;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let gameCount = 1; gameCount <=5; gameCount++) {
        decision = round();
        if (decision.includes('WIN')) {
            playerScore++;
        } else if (decision.includes('LOSE')) {
            computerScore++;
        } else {
            gameCount--;
        }
        console.log(decision);
    }

    if (playerScore > computerScore) {
        results = 'Congratulations! You won! The score was ' + playerScore + '-' + computerScore;
    } else {
        results = 'Better luck next time! The score was ' + playerScore + '-' + computerScore;
    }

    return results;
}

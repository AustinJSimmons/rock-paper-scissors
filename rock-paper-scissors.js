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

function round(playerSelection, computerSelection) {
    let decision;
    computerSelection = computerPlay();
    console.log(computerSelection)
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
    const score = document.querySelector('.score');
    const game = document.querySelector('.game-results');

    const results = document.querySelector('.results');
    const rock = document.querySelector('.rock');
    rock.addEventListener('click', (e) => {
        let roundResult = round('ROCK', computerPlay);
        results.textContent = roundResult;

        if (results.textContent.includes('WIN')) {
            playerScore++;
        } else {
            computerScore++;
        }
        score.textContent = `Computer: ${computerScore} \n 
        Player: ${playerScore}`; 

        if (playerScore === 5) {
            game.textContent = `Congratulations! you\'ve won with a score of ${playerScore}-${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            game.textContent = `Better luck next time! You lost... The score was ${playerScore}-${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        }
    });
    const paper = document.querySelector('.paper');
    paper.addEventListener('click', (e) => {
        roundResult = round('PAPER', computerPlay);
        results.textContent = roundResult;

        if (results.textContent.includes('WIN')) {
            playerScore++;
        } else {
            computerScore++;
        }
        score.textContent = `Computer: ${computerScore} \n 
        Player: ${playerScore}`; 

        if (playerScore === 5) {
            game.textContent = `Congratulations! you\'ve won with a score of ${playerScore}-${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            game.textContent = `Better luck next time! You lost... The score was ${playerScore}-${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        }
    });
    const scissors = document.querySelector('.scissors');
    scissors.addEventListener('click', (e) => {
        roundResult = round('SCISSORS', computerPlay);
        results.textContent = roundResult;

        if (results.textContent.includes('WIN')) {
            playerScore++;
        } else if (results.textContent.includes('LOSE')) {
            computerScore++;
        }
        score.textContent = `Computer: ${computerScore} \n 
        Player: ${playerScore}`;  

        if (playerScore === 5) {
            game.textContent = `Congratulations! you\'ve won with a score of ${playerScore}-${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            game.textContent = `Better luck next time! You lost... The score was ${playerScore}-${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        }
    });


    
    

 



}





game();


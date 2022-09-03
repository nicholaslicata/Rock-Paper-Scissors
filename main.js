// Global Variables
const results = document.querySelector('.results');
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const userDisplay = document.querySelector('.user-score');
const compDisplay = document.querySelector('.comp-score');
let userScore = 0;
let compScore = 0;

let choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
   // Get randomized computer choice
   let computerChoice = choices[Math.floor(Math.random() * choices.length)];
   return computerChoice;
}

function userPlay() {
    // Get user choice on button click
    rockBtn.addEventListener('click', function() {
        playRound('rock');
    })
    paperBtn.addEventListener('click', function() {
        playRound('paper');
    })
    scissorsBtn.addEventListener('click', function() {
        playRound('scissors');
    })
}

function playRound(playerChoice) {
    const computerChoice = computerPlay();

    // User and computer tie
    if(playerChoice === computerChoice) {
        tie(playerChoice, computerChoice);
    }

    // All outcomes for user win
    if(playerChoice === 'rock' && computerChoice === 'scissors') {
        win(playerChoice, computerChoice);
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        win(playerChoice, computerChoice);
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        win(playerChoice, computerChoice);
    }

    // All outcomes for computer win
    if(playerChoice === 'rock' && computerChoice === 'paper') {
        lose(playerChoice, computerChoice);
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        lose(playerChoice, computerChoice);
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        lose(playerChoice, computerChoice);
    }

}

function win(user, computer) {
    // Increase user score total and display scores/results
    userScore++;
    userDisplay.textContent = userScore;
    compDisplay.textContent = compScore;
    results.textContent = `${capitalize(user)} ${'beats'} ${capitalize(computer)}. ${'You win!'}`
}

function lose(user, computer) {
    // Increase computer score total and display scores/results
    compScore++
    compDisplay.textContent = compScore;
    userDisplay.textContent = userScore;
    results.textContent = `${capitalize(computer)} ${'beats'} ${capitalize(user)}. ${'You lose!'}`
}

function tie(user, computer) {
    // Keep scores the same and display results
    userDisplay.textContent = userScore;
    compScore.textContent = compScore;
    results.textContent = `${capitalize(user)} ${'is equal to'} ${capitalize(computer)}. ${'It\'s a tie!'}`
}

function capitalize(word) {
    // Take lowercase argument and return with uppercase first letter
    if (word === 'rock') return 'Rock';
    if (word ==='paper') return 'Paper';
    if (word === 'scissors') return 'Scissors';
}


userPlay();






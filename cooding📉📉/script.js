// script.js

const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const resultDisplay = document.getElementById('result');
const attemptsDisplay = document.getElementById('attempts');
const restartButton = document.getElementById('restart-button');

let targetNumber;
let attempts = 0;

function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    resultDisplay.textContent = '';
    restartButton.style.display = 'none';
}

function handleGuess() {
    const guess = parseInt(guessInput.value, 10);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        resultDisplay.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (guess === targetNumber) {
        resultDisplay.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        guessButton.disabled = true;
        restartButton.style.display = 'block';
    } else if (guess < targetNumber) {
        resultDisplay.textContent = 'Too low! Try again.';
    } else {
        resultDisplay.textContent = 'Too high! Try again.';
    }
}

function restartGame() {
    guessButton.disabled = false;
    startGame();
}

guessButton.addEventListener('click', handleGuess);
restartButton.addEventListener('click', restartGame);

// Start a new game on page load
startGame();
const difficultyArticle = document.querySelector('#difficulty-article');
const difficultyOptions = document.querySelector('#difficulty-options');
const startGameButton = document.querySelector('#start-game');

const playArticle = document.querySelector('#play-article');
const timeDisplay = document.querySelector('#time-display');
const miniutesDisplay = document.querySelector('#minutes-display');
const secondsDisplay = document.querySelector('#seconds-display');
const categoryDisplay = document.querySelector('#category-display');
const livesDisplay = document.querySelector('#lives-display');
const startTimeButton = document.querySelector('#start-time');
const stopTimeButton = document.querySelector('#stop-time');
const resetGameButton = document.querySelector('#reset-game');
const letterGuessInput = document.querySelector('#letter-guess-input');
const usedLettersDisplay = document.querySelector('#used-letter-display');

const resultArticle = document.querySelector('#result-article');
const displayResults = document.querySelector('#display-results');

let randomWord;
let maxTime = 0;
let currentTime = 0;
let currentSeconds = 0;
let currentMinutes = 0;
let lives = 0;
let difficulty;
let category;
let countDownInterval;
let correctGuesses = 0;
let incorrectGuesses = 0;
let usedLetters = [];

function playGame(maxTime) {
    let wordInfo = determineWord();
    let randomWord = wordInfo.word;
    let category = wordInfo.category;

    currentTime = maxTime;
    countDown(currentTime);

    countDownInterval = setInterval(() => {
        countDown();
        currentTime--;
    }, 1000)

    categoryDisplay.innerHTML = `Category: ${category}`;
    livesDisplay.innerHTML = `Lives Left: ${lives}`;
}

function determineWord() {
    let categories = Object.keys(PlayingArrays);
    category = categories.at(Math.floor(Math.random() * categories.length));
    let words = PlayingArrays[category];
    randomWord = words.at(Math.floor(Math.random() * words.length));

    return {
        word: randomWord,
        category: category
    }
}

function countDown() {
    currentSeconds = currentTime % 60;
    currentMinutes = Math.floor(currentTime / 60);
    currentSeconds = currentSeconds < 10 ? `0${currentSeconds}` : `${currentSeconds}`;
    currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : `${currentMinutes}`;

    if (currentMinutes == 0 && currentSeconds <= 30) {
        secondsDisplay.style.color = "red";
        miniutesDisplay.style.color = "red";
    }

    secondsDisplay.innerHTML = currentSeconds;
    miniutesDisplay.innerHTML = currentMinutes;

    if (currentTime == 0) {
        document.getElementById('view-results').hidden = false;
        startTimeButton.disabled = true;
        resetGameButton.disabled = true;
        stopTimeButton.disabled = true;
        letterGuessInput.disabled = true;
        clearInterval(countDownInterval);
        gameOverMessage.hidden = false;
    }
}

function validateInput() {
    letterGuessInput.value = letterGuessInput.value.replace(/[^A-Za-z]/g, '');
}

function endGame() {
    playArticle.classList.add("hidden");
    resultArticle.classList.remove("hidden");

    let div = document.createElement("div");

    div.setAttribute("id", "display-output");
    div.style.width = '100vw';
    div.style.height = '75vh';
    div.style.textAlign = "center";
    div.style.alignItems = "center";
    div.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    div.style.fontSize = "24pt";
    div.style.fontWeight = "500";
    div.style.border = "0";
    resultArticle.appendChild(div);   
    
    const displayOutput = document.querySelector('#display-output');

    if (lives <= 0 || currentTime == 0) {
        displayOutput.innerHTML = 
        `
            <p>
                Category: ${category} <br>
                The Word To Guess: ${randomWord} <br>
                Time Left: ${currentMinutes}:${currentSeconds} <br>
                Lives Left: ${lives} <br>
                Correct Guesses: ${correctGuesses} <br>
                Incorrect Guesses: ${incorrectGuesses}
            </p>    
        `
    } 
}

playArticle.classList.add("hidden");
resultArticle.classList.add("hidden");

startGameButton.addEventListener('click', (event) => {
    let difficulty = difficultyOptions.value;

    if (difficulty == "Easy") {
        maxTime = 300;
        lives = 8;
    }

    if (difficulty == "Medium") {
        maxTime = 225;
        lives = 5;
    }

    if (difficulty == "Hard") {
        maxTime = 150;
        lives = 3;
    }

    if (difficulty == "Impossible") {
        maxTime = 75;
        lives = 1;
    }
    
    difficultyArticle.classList.add("hidden");
    document.getElementById('view-results').hidden = true;
    gameOverMessage.hidden = true;
    playArticle.classList.remove("hidden");
    playGame(maxTime);
})

startTimeButton.disabled = true;
usedLettersDisplay.hidden = true;

letterGuessInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && letterGuessInput.value != "") {
        let letterGuess = letterGuessInput.value;
        let span = document.createElement("span");

        span.setAttribute("id", `letter${usedLetters[usedLetters.length - 1]}`);
        let usedLetterTemporary = document.getElementById(`letter${usedLetters[usedLetters.length - 1]}`);
        usedLettersDisplay.appendChild(span);
        

        if (usedLetters.includes(letterGuess)) {
            alert("You have used this letter before, try a new one.");
            return;
        }

        usedLetters.push(letterGuess);
        
        if (randomWord.includes(letterGuess)) {
            correctGuesses++;
            usedLetterTemporary.style.color = "green";
        } else {
            livesDisplay.innerHTML = `Lives: ${lives}-1`;
            lives--;
            incorrectGuesses++;
            usedLetterTemporary.style.color = "red";

            setTimeout(() => {
                livesDisplay.innerHTML = `Lives: ${lives}`;
            }, 2500)

            if (lives == 1) {
                livesDisplay.style.color = "red";
            }
        }

        usedLetterTemporary.innerHTML += `${letterGuess}, `

        if (lives == 0) {
            document.getElementById('view-results').hidden = false;
            startTimeButton.disabled = true;
            resetGameButton.disabled = true;
            stopTimeButton.disabled = true;
            letterGuessInput.disabled = true;
            clearInterval(countDownInterval);
            gameOverMessage.hidden = false;
        }

        letterGuessInput.value = "";
    }
})

document.getElementById('view-results').addEventListener('click', endGame);
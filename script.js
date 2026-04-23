const words = ["javascript", "hangman", "coding", "developer", "browser"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let correctLetters = [];
let wrongLetters = [];
let attempts = 6;

const wordDisplay = document.getElementById("word-display");
const wrongDisplay = document.getElementById("wrong-letters");
const attemptsDisplay = document.getElementById("attempts");
const message = document.getElementById("message");

function displayWord() {
  wordDisplay.innerHTML = selectedWord
    .split("")
    .map(letter => (correctLetters.includes(letter) ? letter : "_"))
    .join(" ");
}

function guessLetter() {
  const input = document.getElementById("letter-input");
  const letter = input.value.toLowerCase();
  input.value = "";

  if (!letter.match(/[a-z]/i)) return;

  if (selectedWord.includes(letter)) {
    if (!correctLetters.includes(letter)) {
      correctLetters.push(letter);
    }
  } else {
    if (!wrongLetters.includes(letter)) {
      wrongLetters.push(letter);
      attempts--;
    }
  }

  updateGame();
}

function updateGame() {
  displayWord();
  wrongDisplay.innerText = wrongLetters.join(", ");
  attemptsDisplay.innerText = attempts;

  if (attempts === 0) {
    message.innerText = "Game Over! Word was: " + selectedWord;
  }

  if (selectedWord.split("").every(letter => correctLetters.includes(letter))) {
    message.innerText = "You Win!";
  }
}

displayWord();

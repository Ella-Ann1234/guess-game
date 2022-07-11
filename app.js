const startButtonElement = document.querySelector(".name-btn");
const gameAreaContainer = document.getElementById("game-area");
const welcomePage = document.querySelector(".welcome-page");
const playerNameInput = document.querySelector(".player-input");
let enteredPlayerName = document.getElementById("user-player-name");

const enterButton = document.getElementById("enter-btn");
const resetButton = document.getElementById("replay-btn");
const outputText = document.getElementById("output-text");
let randomNumber = Math.ceil(Math.random() * 30) + 1;
let guessInput = document.getElementById("user-input");
let gussedNumber = guessInput.value;

function activateInput(event) {
  let inputTrimmed = playerNameInput.value.trim();
  enteredPlayerName.textContent = inputTrimmed;

  if (inputTrimmed.length > 1) {
    startButtonElement.classList.remove("disable");
  } else {
    startButtonElement.classList.add("disable");
  }
}

function startGame(event) {
  event.preventDefault();
  gameAreaContainer.style.display = "block";
  welcomePage.style.display = "none";
}

function checkNumber() {
  const guessInput = document.getElementById("user-input");
  let gussedNumber = guessInput.value;

  if (gussedNumber == randomNumber) {
    outputText.innerHTML =
      "Correct!" + "," + "The Secret Number is " + randomNumber;
    outputText.style.color = "#f57e7e";
    const outputScore = document.getElementById("player-score");
    outputScore.textContent = randomNumber;
    outputScore.style.color = "#f57e7e";
  } else if (gussedNumber > randomNumber && gussedNumber < 31) {
    outputText.innerHTML = "You Guessed too high!";
    outputText.style.color = "red";
  } else if (gussedNumber < randomNumber && gussedNumber > 0) {
    outputText.innerHTML = "You Guessed Too Low!";
    outputText.style.color = "red";
  } else if (guessInput.value.trim() == "") {
    outputText.innerHTML = "Please Enter A Number Below!";
    outputText.style.color = "yellow";
  } else if (gussedNumber < 1) {
    outputText.innerHTML = "higher!, it has to be between 1 and 30 ";
    outputText.style.color = "red";
  } else if (isNaN(gussedNumber)) {
    outputText.innerHTML = "It must be a number!";
    outputText.style.color = "red";
  } else {
    outputText.innerHTML = "Too high!, it has to be between 1 and 30";
    outputText.style.color = "red";
  }
}
function reloadPage() {
  const guessInput = document.getElementById("user-input");
  guessInput.value = "";
  outputText.innerHTML = "Enter a number below";
  outputText.style.color = "yellow";
  // location.reload();
}

playerNameInput.addEventListener("keyup", activateInput);
startButtonElement.addEventListener("click", startGame);
enterButton.addEventListener("click", checkNumber);
resetButton.addEventListener("click", reloadPage);

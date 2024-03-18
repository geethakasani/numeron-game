// Iteration 2: Generate 2 random number and display it on the screen
let playerScore = 0;
function updateScore(points) {
    playerScore += points;
    localStorage.setItem("playerScore", playerScore);
}
function compareNumbers(operator) {
    const number1 = parseInt(document.getElementById("number1").textContent);
    const number2 = parseInt(document.getElementById("number2").textContent);
    let result;
    switch (operator) {
        case ">":
            result = number1 > number2;
            break;
        case "=":
            result = number1 === number2;
            break;
        case "<":
            result = number1 < number2;
            break;
    }
    if (result) {
        updateScore(1); 
    } else {
        updateScore(-1); 
    }
}
// Iteration 3: Make the options button functional
const greaterThanButton = document.getElementById("greater-than");
const equalToButton = document.getElementById("equal-to");
const lesserThanButton = document.getElementById("lesser-than");
greaterThanButton.addEventListener("click", function () {
    compareNumbers(">");
});

equalToButton.addEventListener("click", function () {
    compareNumbers("=");
});

lesserThanButton.addEventListener("click", function () {
    compareNumbers("<");
});

function generateRandomNumbers() {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;
    number1.textContent = randomNumber1;
    number2.textContent = randomNumber2;
}
// Iteration 4: Build a timer for the game
let timeInSeconds = 25;
function updateTimerAndNumbers() {
    document.getElementById("timer").textContent = timeInSeconds;
    if (timeInSeconds % 3 === 0) {
        generateRandomNumbers();
    }
    if (timeInSeconds <= 0) {
        clearInterval(timerInterval); 
        window.location.href = "gameover.html";
    } else {
        timeInSeconds--;
    }
}
const timerInterval = setInterval(updateTimerAndNumbers, 1000);

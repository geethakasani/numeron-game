// Iteration 5: Store the player score and display it on the game over screen
function displayScore() {
    const scoreBoard = document.getElementById("score-board");
    const playerScore = localStorage.getItem("playerScore");
    scoreBoard.textContent = playerScore ? playerScore : 0;
}
displayScore();
const playAgainButton = document.getElementById("play-again-button");
playAgainButton.addEventListener("click", function () {
    window.location.href = "game.html"; 
});

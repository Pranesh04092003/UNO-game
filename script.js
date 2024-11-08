
function signInWithInstagram() {
   
    window.location.href = "https://www.instagram.com"; 
}

// Initial setup
let scores = [0, 0, 0, 0];
let currentPlayer = 1;
const winningScore = 50;

function drawCard(playerIndex) {
    if (currentPlayer !== playerIndex) {
        alert(`It's Player ${currentPlayer}'s turn!`);
        return;
    }

    // Random points for drawn card (between 5 and 15)
    const points = Math.floor(Math.random() * 11) + 5;
    scores[playerIndex - 1] += points;

    // Update score display
    document.getElementById(`player${playerIndex}-score`).textContent = `Score: ${scores[playerIndex - 1]}`;
    document.getElementById("current-card").textContent = `Player ${playerIndex} drew ${points} points`;

    // Move to discard pile
    document.getElementById("discard-pile").textContent = `Last Card: ${points} points`;

    // Check for win
    if (scores[playerIndex - 1] >= winningScore) {
        alert(`Player ${playerIndex} wins with ${scores[playerIndex - 1]} points!`);
        resetGame();
        return;
    }

    // Switch to the next player
    currentPlayer = currentPlayer % 4 + 1;
}

function resetGame() {
    scores = [0, 0, 0, 0];
    currentPlayer = 1;
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`player${i}-score`).textContent = "Score: 0";
    }
    document.getElementById("current-card").textContent = "Draw a card to start";
    document.getElementById("discard-pile").textContent = "Discard Pile";
}

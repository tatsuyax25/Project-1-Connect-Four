/*----- Game Board -----*/
// 2D array representing the game board: 7 columns x 6 rows
// 0 = empty, 1 = player 1, 2 = player 2
let board = [
    [0, 0, 0, 0, 0, 0, 0],  // Column 0 (leftmost)
    [0, 0, 0, 0, 0, 0, 0],  // Column 1
    [0, 0, 0, 0, 0, 0, 0],  // Column 2
    [0, 0, 0, 0, 0, 0, 0],  // Column 3
    [0, 0, 0, 0, 0, 0, 0],  // Column 4
    [0, 0, 0, 0, 0, 0, 0],  // Column 5
    [0, 0, 0, 0, 0, 0, 0]   // Column 6 (rightmost)
];

/*----- Game State Variables -----*/
let currentPlayer = 1;    // 1 = Player 1 (red), 2 = Player 2 (blue)
let gameOver = false;     // Prevents moves after someone wins

// HTML elements to display game results
const player1Display = document.querySelector(".player1");
const player2Display = document.querySelector(".player2");
const tieDisplay = document.querySelector(".tie");
const currentPlayerDisplay = document.querySelector("#current-player");
const resetBtn = document.querySelector("#reset-btn");



/*----- DOM Elements -----*/
const gameBoard = document.querySelector("#board");  // The game board container

// Reset button event listener
resetBtn.addEventListener('click', resetGame);



/*----- Event Listeners -----*/
// Handle clicks on the game board
gameBoard.addEventListener('click', function (e) {
    // Exit if game is over or clicked element isn't a game cell
    if (gameOver || e.target.tagName !== 'DIV') return;
    
    // Get the element's ID (format: "c0r0" = column 0, row 0)
    const elementId = e.target.id;
    if (!elementId || elementId.length < 4) return;
    
    // Extract column number from ID (e.g., "c3r2" -> column 3)
    const column = Number(elementId[1]);
    if (isNaN(column) || column < 0 || column > 6) return;
    
    // Find the lowest empty row in this column (gravity effect)
    const row = findLowestRow(column);
    if (row === -1) return; // Column is full
    
    // Set piece color based on current player
    const color = currentPlayer === 1 ? 'red' : 'blue';
    const cellElement = document.getElementById(`c${column}r${row}`);
    
    if (cellElement) {
        // Place the piece visually and in the game board array
        cellElement.style.backgroundColor = color;
        board[column][row] = currentPlayer;
        
        // Check if this move wins the game
        if (checkWin(column, row)) {
            gameOver = true;
            displayWinner();
        } else {
            // Switch to the other player
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            updateCurrentPlayerDisplay();
        }
    }
});

// Find the lowest empty row in a column (simulates gravity)
function findLowestRow(column) {
    // Start from bottom (row 5) and work up to find first empty spot
    for (let row = 5; row >= 0; row--) {
        if (board[column][row] === 0) {
            return row;  // Found empty spot
        }
    }
    return -1;  // Column is full
}





/*----- Game Logic Functions -----*/

// Check if the current move creates a winning combination of 4 in a row
function checkWin(column, row) {
    const player = board[column][row];
    return checkHorizontal(column, row, player) || 
           checkVertical(column, row, player) || 
           checkDiagonal(column, row, player);
}

// Check for horizontal win (left-right)
function checkHorizontal(column, row, player) {
    let count = 1;
    for (let c = column - 1; c >= 0 && board[c][row] === player; c--) count++;
    for (let c = column + 1; c < 7 && board[c][row] === player; c++) count++;
    return count >= 4;
}

// Check for vertical win (up-down)
function checkVertical(column, row, player) {
    let count = 1;
    for (let r = row + 1; r < 6 && board[column][r] === player; r++) count++;
    return count >= 4;
}

// Check for diagonal wins (both directions)
function checkDiagonal(column, row, player) {
    return checkDiagonalTLBR(column, row, player) || checkDiagonalTRBL(column, row, player);
}

// Check diagonal (top-left to bottom-right: \)
function checkDiagonalTLBR(column, row, player) {
    let count = 1;
    for (let c = column - 1, r = row - 1; c >= 0 && r >= 0 && board[c][r] === player; c--, r--) count++;
    for (let c = column + 1, r = row + 1; c < 7 && r < 6 && board[c][r] === player; c++, r++) count++;
    return count >= 4;
}

// Check diagonal (top-right to bottom-left: /)
function checkDiagonalTRBL(column, row, player) {
    let count = 1;
    for (let c = column + 1, r = row - 1; c < 7 && r >= 0 && board[c][r] === player; c++, r--) count++;
    for (let c = column - 1, r = row + 1; c >= 0 && r < 6 && board[c][r] === player; c--, r++) count++;
    return count >= 4;
}

// Display the winner message on the page
function displayWinner() {
    if (currentPlayer === 1) {
        player1Display.textContent = "Player 1 Wins!";  // Red player wins
        currentPlayerDisplay.textContent = "Player 1 Wins!";
    } else {
        player2Display.textContent = "Player 2 Wins!";  // Blue player wins
        currentPlayerDisplay.textContent = "Player 2 Wins!";
    }
}

// Update current player display
function updateCurrentPlayerDisplay() {
    currentPlayerDisplay.textContent = `Player ${currentPlayer}'s Turn`;
}

// Reset the game to initial state
function resetGame() {
    // Clear the board array
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 6; row++) {
            board[col][row] = 0;
        }
    }
    
    // Clear visual board
    const cells = document.querySelectorAll('#board div');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
    
    // Reset game state
    currentPlayer = 1;
    gameOver = false;
    
    // Clear displays
    player1Display.textContent = '';
    player2Display.textContent = '';
    tieDisplay.textContent = '';
    updateCurrentPlayerDisplay();
}







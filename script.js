document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const turnDisplay = document.getElementById('turn');
    const resetButton = document.getElementById('reset');
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameOver = false;

    // Winning combinations
    const winCombos = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], // rows
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], // columns
        [0, 4, 8], 
        [2, 4, 6]  // diagonals
    ];

    // Function to check for a winner
    function checkWinner() {
        for (const combo of winCombos) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                turnDisplay.textContent = `Player ${board[a]} wins!`;
                gameOver = true;
                return true;
            }
        }
        if (!board.includes('')) {
            turnDisplay.textContent = 'It\'s a draw!';
            gameOver = true;
        }
        return false;
    }

    // Handle button clicks
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (!button.textContent && !gameOver) {
                button.textContent = currentPlayer;
                board[index] = currentPlayer;
                if (!checkWinner()) {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    turnDisplay.textContent = `Player ${currentPlayer}'s turn`;
                }
            }
        });
    });

    // Reset the game
    resetButton.addEventListener('click', () => {
        board = ['', '', '', '', '', '', '', '', ''];
        buttons.forEach(button => button.textContent = '');
        currentPlayer = 'X';
        gameOver = false;
        turnDisplay.textContent = 'Player X\'s turn';
    });
});

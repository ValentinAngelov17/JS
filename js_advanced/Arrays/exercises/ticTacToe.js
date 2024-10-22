function ticTacToe(moves) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let currentPlayer = 'X'; // Player X starts first
    let moveCount = 0;

    function printBoard() {
        board.forEach(row => console.log(row.join('\t')));
    }

    function checkWinner() {
        // Check rows
        for (let row = 0; row < 3; row++) {
            if (board[row][0] === board[row][1] && board[row][1] === board[row][2] && board[row][0] !== false) {
                return board[row][0];
            }
        }

        // Check columns
        for (let col = 0; col < 3; col++) {
            if (board[0][col] === board[1][col] && board[1][col] === board[2][col] && board[0][col] !== false) {
                return board[0][col];
            }
        }

        // Check diagonals
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== false) {
            return board[0][0];
        }

        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== false) {
            return board[0][2];
        }

        return null; // No winner yet
    }

    for (let move of moves) {
        let [row, col] = move.split(' ').map(Number);

        if (board[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue; // Skip this move and let the current player try again
        }

        board[row][col] = currentPlayer;
        moveCount++;

        // Check if there is a winner
        let winner = checkWinner();
        if (winner) {
            console.log(`Player ${winner} wins!`);
            printBoard();
            return;
        }

        // If all spaces are filled and no winner
        if (moveCount === 9) {
            console.log("The game ended! Nobody wins :(");
            printBoard();
            return;
        }

        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// test cases
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);

ticTacToe(["0 0",

    "0 0",

    "1 1",

    "0 1",

    "1 2",

    "0 2",

    "2 2",

    "1 2",

    "2 2",

    "2 1"]);


ticTacToe(["0 1",

    "0 0",

    "0 2",

    "2 0",

    "1 0",

    "1 2",

    "1 1",

    "2 1",

    "2 2",

    "0 0"]);
    
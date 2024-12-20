var board = Array(9);
var currentPlayer = "X";
var gameActive = true;
var winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function makeMove(index) {
    if (board[index] === null && gameActive) {
        board[index] = currentPlayer;
        document.getElementById("cell".concat(index)).innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}
function checkWinner() {
    for (var _i = 0, winningConditions_1 = winningConditions; _i < winningConditions_1.length; _i++) {
        var condition = winningConditions_1[_i];
        var a = condition[0], b = condition[1], c = condition[2];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert("".concat(currentPlayer, " wins!"));
            gameActive = false;
            return;
        }
    }
    if (!board.includes(null)) {
        alert("It's a draw!");
        gameActive = false;
    }
}
function resetGame() {
    board = Array(9);
    currentPlayer = "X";
    gameActive = true;
    for (var i = 0; i < board.length; i++) {
        document.getElementById("cell".concat(i)).innerText = " ";
    }
}


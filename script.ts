let board: (string | null)[] = Array(9);
let currentPlayer: string = "X"; 
let gameActive: boolean = true; 

const winningConditions: number[][] = [ 
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6] 
]; 
    function makeMove(index: number): void { 
        if (board[index] === null && gameActive) { 
            board[index] = currentPlayer; 
            (document.getElementById(`cell${index}`) as HTMLElement).innerText = currentPlayer; 
            checkWinner(); 
            currentPlayer = currentPlayer === "X" ? "O" : "X"; 
        } 
    }
    function checkWinner(): void { 
        for (let condition of winningConditions) { 
            const [a, b, c] = condition; 
            if (board[a] && board[a] === board[b] && board[a] === board[c]) { 
                alert(`${currentPlayer} wins!`); 
                gameActive = false; 
                return; 
            } 
    } 
        if(!board.includes(null)) { 
            alert("It's a draw!");
            gameActive = false;
        }
    } 
    function resetGame(): void {
        board = Array(9); 
        currentPlayer = "X"; 
        gameActive = true; 
        for (let i = 0; i < board.length; i++) { 
            (document.getElementById(`cell${i}`) as HTMLElement).innerText = " "; 
        }
    }

export default class Model {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
        this.winnigPattern = null;
        this.gameProgress = "";
        this.winnerPlayer = "";
    }



    restartTheGame() {
        this.turn = "X";
        this.board.fill(null);
        this.winnigPattern = null;
        console.log("Restarted");
    }



    nextTurn() {
        this.turn = this.turn === "X" ? "O" : "X";
    }



    makeMove(i) {
        if (this.board[i]) {
            return;
        }
        if (this.findWinningCombinations()) {
            return;
        }
        this.board[i] = this.turn;
        if (!this.findWinningCombinations()) {
            this.winnerPlayer = "In Progress";
            this.isInProgress();
            this.nextTurn();
        }

    }



    findWinningCombinations() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.winnigPattern = combination;
                this.winnerPlayer = "Winner Is " + this.turn;
                this.turn = null;
                return combination;
            }
        }
        return null;
    }
    isInProgress() {
        if (!this.findWinningCombinations() && this.board.every(item => item !== null)) {
            this.winnerPlayer = "Tie";
        }
    }
}

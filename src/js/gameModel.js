export default class GameModel {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
        this.winnigPattern = null;

    }
    //Function for restarting the game
    restartTheGame() {
        this.turn = "X";
        this.board.fill(null);
        this.winnigPattern = null;
        console.log("Restarted");
    }
    // Changing the value of turn
    nextTurn() {
        this.turn = this.turn === "X" ? "O" : "X";
    }
    // execute the makeMove function if there are no same character in array position and no winning combinations
    makeMove(i) {
        if (this.board[i]) {
            return;
        }
        this.board[i] = this.turn;
        if (!this.findWinningCombinations()) {
            this.nextTurn();
        }

    }
    //Check if tere are any mathcing combinations
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
                return combination;

            }
        }
        return null;
    }
}

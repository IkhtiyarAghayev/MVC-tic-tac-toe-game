export default class Controller {
    constructor(gameModel, gameView) {
        this.gameModel = gameModel;
        this.gameView = gameView;
    }
    init() {
        this.gameView.boardCells.forEach(cell => {
            cell.addEventListener("click", () => {
                if (!this.gameModel.findWinningCombinations() && cell.innerText === '') {
                    this.gameView.gameStatus.innerText = "In Progress"
                    cell.innerText = this.gameModel.turn;
                    this.gameModel.makeMove(cell.dataset.index);
                    this.gameView.playerTurn.innerText = this.gameModel.turn + "'s Turn";
                    if (this.gameModel.winnigPattern !== null) {
                        this.gameModel.winnigPattern.forEach(pattern => {
                            this.gameView.boardCells[pattern].classList.add("winner");
                            this.gameView.gameStatus.innerText = this.gameView.boardCells[pattern].innerText + " Wins Click Restart Button For New Game";
                        })
                    }
                    if (!this.gameModel.findWinningCombinations() && this.gameModel.board.every(item => item !== null)) {
                        this.gameView.gameStatus.innerText = "Tie";
                    }

                }
            });
        })
        this.gameView.restartButton.addEventListener("click", () => {
            this.gameModel.restartTheGame();
            this.gameView.gameStatus.innerText = "Click The Cells To Start";
            this.gameView.boardCells.forEach(cell => {
                cell.classList.remove("winner");
                cell.innerText = '';
                this.gameView.playerTurn.innerText = "X's Turn";
            })
        });
    }

}
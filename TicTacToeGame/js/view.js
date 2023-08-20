export default class View {
    constructor() {
        this.root = document.getElementById("app");
        this.boardCells = this.root.querySelectorAll(".boardCells");
        this.playerTurn = this.root.querySelector(".playerTurn");
        this.gameStatus = this.root.querySelector(".gameStatus");
        this.restartButton = this.root.querySelector(".restartButton");
    }
    clickedCell(callback) {
        this.boardCells.forEach(cell => {
            cell.addEventListener('click', () => {
                callback(cell.dataset.index);
            });
        })
    }
    getClickedCell(indexValue, turn) {
        if (this.boardCells[indexValue].innerText) {
            return;
        }
        this.boardCells[indexValue].innerText = turn;
    }
    displayPlayer(player) {
        if (player !== null) {
            this.playerTurn.innerText = player + "'s Turn";
        }
    }
    winPattern(pattern) {
        if (pattern !== null) {
            pattern.forEach(pattern => {
                this.boardCells[pattern].classList.add("winner");
            })
        }
    }
    gameProgress(winner) {
        if (winner.includes(null)) {
            return;
        }
        this.gameStatus.innerText = winner;
    }
    gameRestart(callback) {
        this.restartButton.addEventListener("click", () => {
            this.boardCells.forEach(cell => {
                cell.classList.remove("winner");
                cell.innerText = '';
            });
            callback();
        });
    }
}


export default class GameView {
    constructor(root) {
        this.root = document.getElementById("app");
        this.boardCells = this.root.querySelectorAll(".boardCells");
        this.gameStatus = this.root.querySelector(".gameStatus");
        this.playerTurn = this.root.querySelector(".playerTurn");
        this.restartButton = this.root.querySelector(".restartButton");

    }


}
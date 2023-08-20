export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

    }
    init() {
        this.view.clickedCell(this.cellClick.bind(this));
        this.view.gameRestart(this.restart.bind(this));
    }

    cellClick(pressedCell) {
        this.view.getClickedCell(pressedCell, this.model.turn);
        this.view.displayPlayer(this.model.turn);
        this.model.makeMove(pressedCell);
        this.view.winPattern(this.model.winnigPattern);
        this.view.gameProgress(this.model.winnerPlayer);
    }
    restart() {
        this.model.restartTheGame();
    }

}
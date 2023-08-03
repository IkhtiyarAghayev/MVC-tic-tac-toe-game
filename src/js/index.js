import GameModel from "./gameModel.js";
import GameView from "./gameView.js";
import GameController from './gameController.js';
function initialize() {
    const gameModel = new GameModel();
    const gameView = new GameView();
    const controller = new GameController(gameModel, gameView);
    controller.init();
}
window.addEventListener("DOMContentLoaded", initialize);
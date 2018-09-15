import renderProgressText from "../../game-logic/progress-text";
import getPlayerResults from "../../game-logic/player-results";
import Loader from "../../game-logic/loader";

export default class StatsModel {
  constructor(game, stats) {
    this.game = game;
    this.stats = stats;
    this.init();
  }

  get result() {
    return Object.freeze(this._state);
  }

  init() {
    this._state = getPlayerResults(this.game, this.stats);
    Loader.saveResults(this._state.newGameStats);
  }

  renderProgressText(data) {
    return renderProgressText(data);
  }
}

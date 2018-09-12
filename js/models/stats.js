import renderProgressText from "../game-logic/render-progress-text";

export default class StatsModel {
  constructor(game) {
    this.game = game;
    this.init();
  }

  get state() {
    return Object.freeze(this._state);
  }

  init() {
    this._state = this.game;
  }

  progress(data) {
    return renderProgressText(data);
  }
}

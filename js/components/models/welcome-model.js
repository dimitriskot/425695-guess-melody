import Router from "../../router";

export default class WelcomeModel {
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

  start() {
    Router.showGame(this.game);
  }
}

import {confirmRestart, cancelRestart} from "../../game-logic/restart";

export default class ConfirmModel {
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

  confirmRestart(e) {
    confirmRestart(this._state, e);
  }

  confirmCancel() {
    cancelRestart(this._state);
  }
}

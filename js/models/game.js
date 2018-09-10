import levelChange from "../game-logic/level-change";
import subLevelsCount from "../game-logic/levels-count";
import getPlayerAnswer from "../game-logic/player-answer";
import subPlayerLives from "../../game-logic/player-lives";

export default class GameModel {
  constructor(game) {
    this.game = game;
  }

  get state() {
    return Object.freeze(this._state);
  }

  nextLevel() {
    this._state = levelChange(this._state, this._state.level + 1);
  }

  subLevels() {
    this._state = subLevelsCount(this._state);
  }

  playerAnswer(isSuccess, time) {
    this._state = getPlayerAnswer(this._state, isSuccess, time);
  }

  subLives() {
    this._state = subPlayerLives(this._state);
  }

  // die() {
  //   this._state = die(this._state);
  // }

  // restart() {
  //   this._state = INITIAL_GAME;
  // }

  // isDead() {
  //   return this._state.lives <= 0;
  // }

  // getCurrentLevel() {
  //   return getLevel(this._state);
  // }

  // tick() {
  //   this._state = tick(this._state);
  // }
}

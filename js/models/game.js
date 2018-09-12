import {getLevelData} from "../data/levels";
import Router from "../router";
import levelChange from "../game-logic/level-change";
import subLevelsCount from "../game-logic/levels-count";
import getPlayerAnswer from "../game-logic/player-answer";
import subPlayerLives from "../game-logic/player-lives";
import {subGameTime, calcLevelTime, clearLevelTime} from "../game-logic/timer";
import getGameResults from "../game-logic/game-results";

export default class GameModel {
  constructor(game) {
    this.game = game;
    this.init();
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

  playerAnswer(isSuccess) {
    this._state = getPlayerAnswer(this._state, isSuccess);
  }

  subLives() {
    this._state = subPlayerLives(this._state);
  }

  subGameTime(time) {
    this._state = subGameTime(this._state, time);
  }

  calcLevelTime(time) {
    this._state = calcLevelTime(this._state, time);
  }

  clearLevelTime() {
    this._state = clearLevelTime(this._state);
  }

  gameResults() {
    this._state = getGameResults(this._state, [6, 7, 8, 9]);
  }

  init() {
    this._state = this.game;
  }

  showConfirm() {
    Router.showConfirm(this._state);
  }

  isLoser() {
    return this._state.lives <= 0;
  }

  isLevelsOver() {
    return this._state.levelsCount <= 0;
  }

  isTimeOver() {
    return this._state.time.total <= 0;
  }

  getCurrentLevelData() {
    return getLevelData(this._state.level);
  }
}

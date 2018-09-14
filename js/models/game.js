import Router from "../router";
import {HALF_MINUTE_MS} from "../data/constants";
import getLevelData from "../game-logic/level-data";
import levelChange from "../game-logic/level-change";
import getPlayerAnswer from "../game-logic/player-answer";
import subPlayerLives from "../game-logic/player-lives";
import {subGameTime, calcLevelTime, clearLevelTime, getTimeStroke} from "../game-logic/timer";
import getResults from "../game-logic/game-results";

export default class GameModel {
  constructor(game, data) {
    this.game = game;
    this.data = data;
    this.init();
  }

  get state() {
    return Object.freeze(this._state);
  }

  init() {
    this._state = this.game;
  }

  nextLevel() {
    this._state = levelChange(this._state, this._state.level + 1);
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
    getResults(this._state);
  }

  showConfirm() {
    Router.showConfirm(this._state);
  }

  isLoser() {
    return this._state.lives <= 0;
  }

  isLevelsOver(level) {
    return this.data.indexOf(level) === this.data.length - 1;
  }

  isTimeLess() {
    return this._state.time.total <= HALF_MINUTE_MS;
  }

  isTimeOver() {
    return this._state.time.total <= 0;
  }

  getCurrentLevelData() {
    return getLevelData(this.data, this._state.level);
  }

  stroke() {
    return getTimeStroke(this._state);
  }
}

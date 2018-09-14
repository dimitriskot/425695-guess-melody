import Router from "../../router";
import {HALF_MINUTE_MS} from "../../data/constants";
import getLevelData from "../../game-logic/level-data";
import levelChange from "../../game-logic/level-change";
import getPlayerAnswer from "../../game-logic/player-answer";
import substractPlayerLives from "../../game-logic/player-lives";
import {substractGameTime, calculateLevelTime, clearLevelTime, getTimeStrokeData} from "../../game-logic/timer";
import getResults from "../../game-logic/game-results";

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

  getNextLevel() {
    this._state = levelChange(this._state, this._state.level + 1);
  }

  getPlayerAnswer(isSuccess) {
    this._state = getPlayerAnswer(this._state, isSuccess);
  }

  substractLives() {
    this._state = substractPlayerLives(this._state);
  }

  substractGameTime(time) {
    this._state = substractGameTime(this._state, time);
  }

  calculateLevelTime(time) {
    this._state = calculateLevelTime(this._state, time);
  }

  clearLevelTime() {
    this._state = clearLevelTime(this._state);
  }

  getGameResults() {
    getResults(this._state);
  }

  showConfirm() {
    Router.showConfirm(this._state);
  }

  getCurrentLevelData() {
    return getLevelData(this.data, this._state.level);
  }

  getTimeStrokeData() {
    return getTimeStrokeData(this._state);
  }

  isLevelsOver(level) {
    return this.data.indexOf(level) === this.data.length - 1;
  }

  isLoser() {
    return this._state.lives <= 0;
  }

  isTimeLess() {
    return this._state.time.total <= HALF_MINUTE_MS;
  }

  isTimeOver() {
    return this._state.time.total <= 0;
  }
}

import AbstractView from "./abstract-view";
import {getDom} from "../util";
import {HALF_MINUTE_MS} from "../../data/constants";
import getPlayerAnswer from "../../game-logic/player-answer";
import subPlayerLives from "../../game-logic/player-lives";
import subTime from "../../game-logic/timer";
import subLevelsCount from "../../game-logic/levels-count";
import levelChange from "../../game-logic/level-change";
import {playGame} from '../../game-logic/game';

export default class GameView extends AbstractView {
  get template() {
    return null;
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  render() {
    return getDom(this.template, [`game`]);
  }

  getLevelResult(isSuccess) {
    let newGame = Object.assign({}, this.game);
    newGame = getPlayerAnswer(newGame, isSuccess, HALF_MINUTE_MS);
    if (isSuccess) {
      newGame = subLevelsCount(newGame);
    } else {
      newGame = subPlayerLives(newGame);
    }
    newGame = subTime(newGame, HALF_MINUTE_MS);
    newGame = levelChange(newGame, ++newGame.level);
    playGame(newGame);
  }

  toggleAudio(audio) {
    if (audio.classList.contains(`active`)) {
      audio.classList.remove(`active`);
      audio.pause();
    } else {
      audio.classList.add(`active`);
      audio.play();
    }
  }

  togglePlayButton(button) {
    button.classList.toggle(`track__button--pause`);
  }
}

import AbstractView from "./common/abstract-view";
import {getDom} from "./util";
import {currentGame} from "../data/initial-game";
import {updateGame} from '../game-logic/update-game';

export default class ResultSuccessView extends AbstractView {
  constructor(results) {
    super();
    this.results = results;
  }

  get template() {
    return `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
    <p class="result__text">Вы заняли ${this.results.position} место из ${this.results.places}. Это лучше, чем у ${this.results.percent}% игроков
    </p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>`;
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
    return getDom(this.template, [`result`]);
  }

  bind() {
    const replayButton = this._element.querySelector(`.result__replay`);
    replayButton.addEventListener(`click`, () => updateGame(currentGame));
  }
}

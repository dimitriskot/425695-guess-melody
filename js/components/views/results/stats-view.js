import Router from "../../../router";
import AbstractView from "../common/abstract-view";
import {className} from "../../../data/enums";
import {currentGame} from "../../../data/initial-game";
import {getDom} from "../../../util";

export default class StatsView extends AbstractView {
  constructor(results) {
    super();
    this.progress = results.describe.progress;
    this.stats = results.describe.stats;
  }

  get template() {
    return `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">${this.renderProgressText(this.progress)}</p>
    <p class="result__text">Вы заняли ${this.stats.position} место из ${this.stats.places}. Это лучше, чем у ${this.stats.percent}% игроков
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
    return getDom(this.template, className.RESULT);
  }

  bind() {
    const replayButton = this._element.querySelector(`.result__replay`);
    replayButton.addEventListener(`click`, () => Router.showGame(currentGame));
  }

  renderProgressText() {}
}

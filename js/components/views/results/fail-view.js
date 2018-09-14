import Router from "../../../router";
import AbstractView from "../common/abstract-view";
import {classes} from "../../../data/enums";
import {currentGame} from "../../../data/initial-game";
import {getDom} from "../../../util";

export default class FailView extends AbstractView {
  constructor(fail) {
    super();
    this.fail = fail;
  }

  get template() {
    return `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">${this.fail.title}</h2>
    <p class="result__total result__total--fail">${this.fail.message}</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>`;
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
    return getDom(this.template, classes.RESULT);
  }

  bind() {
    const replayButton = this._element.querySelector(`.result__replay`);
    replayButton.addEventListener(`click`, () => Router.showGame(currentGame));
  }
}

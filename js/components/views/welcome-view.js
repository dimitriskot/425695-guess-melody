import AbstractView from "./common/abstract-view";
import {className} from "../../data/enums";
import {getDom} from "../../util";

export default class WelcomeView extends AbstractView {
  get template() {
    return `<div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
    <h2 class="welcome__rules-title">Правила игры</h2>
    <p class="welcome__text">Правила просты:</p>
    <ul class="welcome__rules-list">
      <li>За 5 минут нужно ответить на все вопросы.</li>
      <li>Можно допустить 3 ошибки.</li>
    </ul>
    <p class="welcome__text">Удачи!</p>`;
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
    return getDom(this.template, className.WELCOME);
  }

  bind() {
    const startButton = this._element.querySelector(`.welcome__button`);
    startButton.addEventListener(`click`, () => {
      this.onStartButtonClick();
    });
  }

  onStartButtonClick() {}
}

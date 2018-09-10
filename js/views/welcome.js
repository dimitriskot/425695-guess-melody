import {getDom} from "../components/util";
// import {startGame} from "../game-logic/start-game";
import AbstractView from "../components/common/abstract-view";
import Router from "../router";

export default class WelcomeView extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

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
    return getDom(this.template, [`welcome`]);
  }

  bind() {
    const startGameButton = this._element.querySelector(`.welcome__button`);
    startGameButton.addEventListener(`click`, () => Router.showGame(this.game));
  }
}

import GameView from "./game-view";
import {debug} from "../../../data/enums";
import {getDom} from "../../../util";

export default class GameGenreView extends GameView {
  constructor(game, level) {
    super();
    this.game = game;
    this.level = level;
  }

  get template() {
    return `<section class="game__screen">
    <h2 class="game__title">${this.level.question}</h2>
    <form class="game__tracks">
      ${this.level.answers.map((track, id) => `<div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
          <audio src="${track.src}"></audio>
          </div>
          <div class="game__answer" ${debug.STATE && track.genre === this.level.genre ? debug.STYLE : ``}>
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="${track.genre}" id="${id}">
          <label class="game__check" for="${id}">Отметить</label>
          </div>
        </div>`).join(``)}
      <button class="game__submit button" type="submit">Ответить</button>
    </form>
    </section>`;
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
    return getDom(this.template);
  }

  bind() {
    const submitButton = this._element.querySelector(`.game__submit`);
    submitButton.disabled = true;
    const answers = this._element.querySelectorAll(`.game__answer > .game__input`);
    [...answers].forEach((answer, i, answersCollection) => {
      answer.addEventListener(`change`, () => this.onSubmitButtonChange(answer, answersCollection, submitButton));
    });
    const playButtons = this._element.querySelectorAll(`.track__button`);
    [...playButtons].forEach((button, i, buttons) => {
      button.addEventListener(`click`, (e) => this.onPlayButtonClick(e, buttons));
    });
    submitButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onSubmitButtonClick(e, answers);
    });
  }

  onSubmitButtonChange() {}
}

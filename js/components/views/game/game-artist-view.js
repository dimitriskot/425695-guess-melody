import GameView from "./game-view";
import {debug} from "../../../data/enums";
import {getDom} from "../../../util";

export default class GameArtistView extends GameView {
  constructor(game, level) {
    super();
    this.game = game;
    this.level = level;
  }

  get template() {
    return `<section class="game__screen">
    <h2 class="game__title">${this.level.question}</h2>
    <div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio src="${this.level.src}"></audio>
      </div>
    <form class="game__artist">
      ${this.level.answers.map((track, id) => `<div class="artist" ${debug.STATE && track.isCorrect ? debug.STYLE : ``}>
        <input class="artist__input visually-hidden" type="radio" name="answer" value="${track.title}" id="${id}">
        <label class="artist__name" for="${id}">
          <img class="artist__picture" src="${track.image.url}" alt="${track.title}">
          ${track.title}
        </label>
        </div>`).join(``)}
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
    const answers = this._element.querySelectorAll(`.artist__input`);
    const playButton = this._element.querySelector(`.track__button`);
    playButton.addEventListener(`click`, (e) => this.onPlayButtonClick(e));
    [...answers].forEach((submitButton) => submitButton.addEventListener(`click`, (e) => this.onSubmitButtonClick(e)));
  }
}

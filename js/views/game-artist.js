import GameView from "./game";
import {getDom} from "../components/util";

export default class GameArtistView extends GameView {
  constructor(game, level) {
    super();
    this.game = game;
    this.level = level;
  }

  get template() {
    return `<section class="game__screen">
    <h2 class="game__title">${this.level.title}</h2>
    <div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio src="${this.level.tracks.find((item) => item.isCorrect).src}"></audio>
      </div>
    <form class="game__artist">
      ${this.level.tracks.map((track, id) => `<div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="${track.artist}" id="${id}">
        <label class="artist__name" for="${id}">
          <img class="artist__picture" src="${track.image}" alt="${track.artist}">
          ${track.artist}
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
    [...answers].forEach((input) => input.addEventListener(`click`, (e) => this.submitAnswer(e)));
  }
}

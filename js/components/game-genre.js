import GameView from "../components/common/game-view";
import {getDom} from "./util";

export default class GameGenreView extends GameView {
  constructor(game, level) {
    super();
    this.game = game;
    this.level = level;
  }

  get template() {
    return `<section class="game__screen">
    <h2 class="game__title">${this.level.title}</h2>
    <form class="game__tracks">
      ${this.level.tracks.map((track, id) => `<div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
          <audio src="${track.src}"></audio>
          </div>
          <div class="game__answer">
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
    const gameSubmitButton = this._element.querySelector(`.game__submit`);
    gameSubmitButton.disabled = true;
    const answers = this._element.querySelectorAll(`.game__answer > .game__input`);
    [...answers].forEach((answer, i, answersCollection) => {
      answer.addEventListener(`change`, () => this.toggleSubmitButtonDisabled(answer, answersCollection, gameSubmitButton));
    });
    const playButtons = this._element.querySelectorAll(`.track__button`);
    [...playButtons].forEach((button, i, buttons) => {
      button.addEventListener(`click`, (e) => this.onPlayButtonClick(e, buttons));
    });
    gameSubmitButton.addEventListener(`click`, (e) => this.submitAnswer(e, answers));
  }

  checkAnswers(answers) {
    const userAnswers = [...answers].filter((answer) => answer.checked === true);
    const isSuccess = userAnswers.every((answer) => this.level.tracks[answer.id].isCorrect);
    return isSuccess;
  }

  toggleSubmitButtonDisabled(answer, answers, button) {
    if (answer.checked) {
      button.disabled = false;
    } else if (!answers.some((el) => el.checked)) {
      button.disabled = true;
    }
  }

  submitAnswer(e, answers) {
    e.preventDefault();
    const isSuccess = this.checkAnswers(answers);
    super.getLevelResult(isSuccess);
  }

  onPlayButtonClick(e, buttons) {
    const currentButton = e.target;
    const currentAudio = currentButton.nextElementSibling.querySelector(`audio`);
    buttons.forEach((button) => {
      if (button !== currentButton) {
        button.classList.remove(`track__button--pause`);
        const audio = button.nextElementSibling.querySelector(`audio`);
        audio.classList.remove(`active`);
        audio.pause();
      }
    });
    super.toggleAudio(currentAudio);
    super.togglePlayButton(currentButton);
  }
}

import {SECOND_MS, HALF_MINUTE_MS, CLASSES} from "../data/constants";
import GameView from "../views/game/game";
import HeaderView from "../views/header";
import GameGenreView from "../views/game/game-genre";
import GameArtistView from "../views/game/game-artist";

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this.data = this.model.getCurrentLevelData();
    this.header = new HeaderView(this.model.state);
    this.getLevelView();
    this.content = new this.LevelView(this.model, this.data);

    this.root = new GameView();
    this.root.element.classList.add(CLASSES[this.data.type]);
    this.root.element.appendChild(this.header.element);
    this.root.element.appendChild(this.content.element);

    this._interval = null;
  }

  get element() {
    return this.root.element;
  }

  isGenre() {
    return this.data.type === `genre`;
  }

  getLevelView() {
    this.LevelView = this.isGenre() ? GameGenreView : GameArtistView;
  }

  stopGame() {
    clearInterval(this._interval);
  }

  startGame() {
    this.changeLevel();

    this._interval = setInterval(() => {
      if (this.model.isTimeOver()) {
        this.stopGame();
        this.model.gameResults();
        return;
      }
      this.model.subTime(SECOND_MS);
      this.updateHeader();
    }, SECOND_MS);
  }

  changeLevel() {
    this.updateHeader();

    const level = new this.LevelView(this.model, this.data);
    this.changeContentView(level);
    this.content.submitAnswer = this.submitAnswer.bind(this);
    this.content.toggleAudio = this.toggleAudio.bind(this);
    this.content.togglePlayButton = this.togglePlayButton.bind(this);
    this.content.onPlayButtonClick = this.onPlayButtonClick.bind(this);

    if (this.content.level.type === `genre`) {
      this.content.toggleSubmitButtonDisabled = this.toggleSubmitButtonDisabled.bind(this);
    }
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.element.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  changeContentView(view) {
    this.root.element.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  updateGameData(isSuccess) {
    this.model.playerAnswer(isSuccess, HALF_MINUTE_MS);
    if (isSuccess) {
      this.model.subLevels();
    } else {
      this.model.subLives();
    }
  }

  getLevelResult() {
    this.stopGame();
    if (!this.model.isLevelsOver() && !this.model.isLoser()) {
      this.model.nextLevel();
      this.data = this.model.getCurrentLevelData();
      this.getLevelView();
      this.startGame();
    } else {
      this.model.gameResults();
    }
  }

  submitAnswer(e, answers) {
    let isSuccess;
    if (this.isGenre()) {
      const userAnswers = [...answers].filter((answer) => answer.checked === true);
      isSuccess = userAnswers.every((answer) => this.data.tracks[answer.id].isCorrect);
    } else {
      const answer = e.target;
      isSuccess = this.data.tracks[answer.id].isCorrect;
    }
    this.updateGameData(isSuccess);
    this.getLevelResult();
  }

  toggleSubmitButtonDisabled(answer, answers, button) {
    if (answer.checked) {
      button.disabled = false;
    } else if (!answers.some((el) => el.checked)) {
      button.disabled = true;
    }
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

  onPlayButtonClick(e, buttons) {
    const currentButton = e.target;
    let currentAudio;
    if (this.isGenre()) {
      currentAudio = currentButton.nextElementSibling.querySelector(`audio`);
      buttons.forEach((button) => {
        if (button !== currentButton) {
          button.classList.remove(`track__button--pause`);
          const audio = button.nextElementSibling.querySelector(`audio`);
          audio.classList.remove(`active`);
          audio.pause();
        }
      });
    } else {
      currentAudio = currentButton.nextElementSibling;
    }
    this.toggleAudio(currentAudio);
    this.togglePlayButton(currentButton);
  }
}

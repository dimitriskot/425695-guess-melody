import {SECOND_MS, CLASSES, QUESTION_TYPE} from "../data/constants";
import HeaderView from "../views/header";
import GameView from "../views/game/game";
import GameGenreView from "../views/game/game-genre";
import GameArtistView from "../views/game/game-artist";

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this._timeStrokeData = this.getStroke();
    this.data = this.model.getCurrentLevelData();
    this.header = new HeaderView(this.model.state, this._timeStrokeData);
    this.getLevelView();
    this.content = new this.LevelView(this.model, this.data);

    this.root = new GameView();
    this.root.element.classList.add(CLASSES[this.data.type]);
    this.root.element.appendChild(this.header.element);
    this.root.element.appendChild(this.content.element);

    this._interval = null;
    this._isAudioPlaying = null;
    this._audio = null;
  }

  get element() {
    return this.root.element;
  }

  isGenre(level) {
    return level.type === QUESTION_TYPE.genre;
  }

  getLevelView() {
    this.LevelView = this.isGenre(this.data) ? GameGenreView : GameArtistView;
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
      this.model.subGameTime(SECOND_MS);
      this.model.calcLevelTime(SECOND_MS);
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

    if (this.isGenre(this.content.level)) {
      this.content.toggleSubmitButtonDisabled = this.toggleSubmitButtonDisabled.bind(this);
    }
  }

  updateHeader() {
    this._timeStrokeData = this.getStroke();
    const header = new HeaderView(this.model.state, this._timeStrokeData);
    this.root.element.replaceChild(header.element, this.header.element);
    this.header = header;
    this.header.onGameBackButtonClick = this.onGameBackButtonClick.bind(this);
    if (this.model.isTimeLess()) {
      const timer = this.header.element.querySelector(`.timer__value`);
      timer.classList.add(`timer__value--finished`);
    }
  }

  changeContentView(view) {
    this.root.element.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  submitAnswer(e, answers) {
    let isSuccess;
    if (this.isGenre(this.data)) {
      const userAnswers = [...answers].filter((answer) => answer.checked === true);
      isSuccess = userAnswers.every((answer) => this.data.answers[answer.id].genre === this.data.genre);
    } else {
      const answer = e.target;
      isSuccess = this.data.answers[answer.id].isCorrect;
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

  toggleAudio(audio, button) {
    if (audio.classList.contains(`active`)) {
      button.classList.remove(`track__button--loading`);
      audio.classList.remove(`active`);
      this.pauseAudio(audio, button);
    } else {
      audio.classList.add(`active`);
      this.playAudio(audio, button);
    }
  }

  playAudio(audio, button) {
    button.classList.add(`track__button--loading`);
    this._audio = audio.play();
    if (this._audio !== undefined) {
      this._isAudioPlaying = false;
      this._audio
      .then(() => {
        button.classList.remove(`track__button--loading`);
        button.classList.add(`track__button--pause`);
        this._isAudioPlaying = true;
      })
      .catch(() => {
        this._audio = null;
      });
    }
  }

  pauseAudio(audio, button) {
    if (!this._isAudioPlaying && this._audio !== null) {
      this._audio = null;
      return;
    }
    audio.pause();
    button.classList.remove(`track__button--pause`);
  }

  togglePlayButton(button) {
    button.classList.toggle(`track__button--pause`);
  }

  onPlayButtonClick(e, buttons) {
    const currentButton = e.target;
    let currentAudio;
    if (this.isGenre(this.data)) {
      currentAudio = currentButton.nextElementSibling.querySelector(`audio`);
      buttons.forEach((button) => {
        if (button !== currentButton) {
          button.classList.remove(`track__button--pause`);
          button.classList.remove(`track__button--loading`);
          const audio = button.nextElementSibling.querySelector(`audio`);
          audio.classList.remove(`active`);
          this.pauseAudio(audio, button);
        }
      });
    } else {
      currentAudio = currentButton.nextElementSibling;
    }
    this.toggleAudio(currentAudio, currentButton);
  }

  onGameBackButtonClick() {
    this.stopGame();
    this.model.showConfirm();
  }

  updateGameData(isSuccess) {
    this.model.playerAnswer(isSuccess);
    this.model.clearLevelTime();
    if (!isSuccess) {
      this.model.subLives();
    }
  }

  getLevelResult() {
    this.stopGame();
    if (!this.model.isLevelsOver(this.data) && !this.model.isLoser()) {
      this.model.nextLevel();
      this.data = this.model.getCurrentLevelData();
      this.getLevelView();
      this.startGame();
    } else {
      this.model.gameResults();
    }
  }

  getStroke() {
    return this.model.stroke();
  }

}

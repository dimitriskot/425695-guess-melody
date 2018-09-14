import {SECOND_MS} from "../../data/constants";
import {classes, questionTypes} from "../../data/enums";
import HeaderView from "../views/header-view";
import GameView from "../views/game/game-view";
import GameGenreView from "../views/game/game-genre-view";
import GameArtistView from "../views/game/game-artist-view";

export default class GamePresenter {
  constructor(model) {
    this.model = model;

    this.data = this.model.getCurrentLevelData();

    this._timeStrokeData = this._getTimeStrokeData();
    this.header = new HeaderView(this.model.state, this._timeStrokeData);

    this._getLevelView();
    this.content = new this.LevelView(this.model, this.data);

    this.root = new GameView();
    this.root.element.classList.add(classes[this.data.type.toLowerCase()]);
    this.root.element.appendChild(this.header.element);
    this.root.element.appendChild(this.content.element);

    this._interval = null;
    this._isAudioPlaying = null;
    this._audio = null;
  }

  get element() {
    return this.root.element;
  }

  startGame() {
    this._changeLevel();

    this._interval = setInterval(() => {
      if (this.model.isTimeOver()) {
        this.stopGame();
        this.model.getGameResults();
        return;
      }
      this.model.substractGameTime(SECOND_MS);
      this.model.calculateLevelTime(SECOND_MS);
      this._updateHeader();
    }, SECOND_MS);
  }

  stopGame() {
    clearInterval(this._interval);
  }


  _isGenre(level) {
    return level.type === questionTypes.GENRE;
  }

  _getLevelView() {
    this.LevelView = this._isGenre(this.data) ? GameGenreView : GameArtistView;
  }


  _changeLevel() {
    this._updateHeader();

    const level = new this.LevelView(this.model, this.data);
    this._changeContentView(level);
    this.content.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
    this.content.onPlayButtonClick = this.onPlayButtonClick.bind(this);
    this._startPlayingAudio(this.content);
    if (this._isGenre(this.content.level)) {
      this.content.onSubmitButtonChange = this.onSubmitButtonChange.bind(this);
    }
  }

  _startPlayingAudio(content) {
    let playButton;
    let audio;
    if (this._isGenre(this.data)) {
      const playButtons = content.element.querySelectorAll(`.track__button`);
      playButton = [...playButtons][0];
      const track = playButton.nextElementSibling;
      audio = track.querySelector(`audio`);
    } else {
      playButton = content.element.querySelector(`.track__button`);
      audio = playButton.nextElementSibling;
    }
    this._toggleAudio(audio, playButton);
  }

  _updateHeader() {
    this._timeStrokeData = this._getTimeStrokeData();
    const header = new HeaderView(this.model.state, this._timeStrokeData);
    this.root.element.replaceChild(header.element, this.header.element);
    this.header = header;
    this.header.onBackButtonClick = this.onBackButtonClick.bind(this);
    if (this.model.isTimeLess()) {
      const timer = this.header.element.querySelector(`.timer__value`);
      timer.classList.add(`timer__value--finished`);
    }
  }

  _changeContentView(view) {
    this.root.element.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  _toggleAudio(audio, button) {
    if (audio.classList.contains(`active`)) {
      button.classList.remove(`track__button--loading`);
      audio.classList.remove(`active`);
      this._pauseAudio(audio, button);
    } else {
      audio.classList.add(`active`);
      this._playAudio(audio, button);
    }
  }

  _playAudio(audio, button) {
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

  _pauseAudio(audio, button) {
    if (!this._isAudioPlaying && this._audio !== null) {
      this._audio = null;
      return;
    }
    audio.pause();
    button.classList.remove(`track__button--pause`);
  }

  _togglePlayButton(button) {
    button.classList.toggle(`track__button--pause`);
  }

  _updateGameData(isSuccess) {
    this.model.getPlayerAnswer(isSuccess);
    this.model.clearLevelTime();
    if (!isSuccess) {
      this.model.substractLives();
    }
  }

  _getLevelResult() {
    this.stopGame();
    if (!this.model.isLevelsOver(this.data) && !this.model.isLoser()) {
      this.model.getNextLevel();
      this.data = this.model.getCurrentLevelData();
      this._getLevelView();
      this.startGame();
    } else {
      this.model.getGameResults();
    }
  }

  _getTimeStrokeData() {
    return this.model.getTimeStrokeData();
  }

  onSubmitButtonClick(e, answers) {
    let isSuccess;
    if (this._isGenre(this.data)) {
      const userAnswers = [...answers].filter((answer) => answer.checked === true);
      const rightAnswers = this.data.answers.filter((answer) => answer.genre === this.data.genre);
      isSuccess = userAnswers.every((answer) => answer.value === this.data.genre) && userAnswers.length === rightAnswers.length;
    } else {
      const answer = e.target;
      isSuccess = this.data.answers[answer.id].isCorrect;
    }
    this._updateGameData(isSuccess);
    this._getLevelResult();
  }

  onSubmitButtonChange(answer, answers, button) {
    if (answer.checked) {
      button.disabled = false;
    } else if (!answers.some((el) => el.checked)) {
      button.disabled = true;
    }
  }

  onPlayButtonClick(e, buttons) {
    const currentButton = e.target;
    let currentAudio;
    if (this._isGenre(this.data)) {
      currentAudio = currentButton.nextElementSibling.querySelector(`audio`);
      buttons.forEach((button) => {
        if (button !== currentButton) {
          button.classList.remove(`track__button--pause`);
          button.classList.remove(`track__button--loading`);
          const audio = button.nextElementSibling.querySelector(`audio`);
          audio.classList.remove(`active`);
          this._pauseAudio(audio, button);
        }
      });
    } else {
      currentAudio = currentButton.nextElementSibling;
    }
    this._toggleAudio(currentAudio, currentButton);
  }

  onBackButtonClick() {
    this.stopGame();
    this.model.showConfirm();
  }

}

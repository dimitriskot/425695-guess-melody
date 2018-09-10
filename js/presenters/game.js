import {SECOND_MS, CLASSES} from "../data/constants";
import GameView from "../views/game";
import HeaderView from "../views/header";
import GameGenreView from "../views/game-genre";
import GameArtistView from "../views/game-artist";

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this.data = this.model.getCurrentLevelData();
    this.header = new HeaderView(this.model.state);
    this.LevelView = this.data.type === `genre` ? GameGenreView : GameArtistView;
    this.content = new this.LevelView(this.model, this.data);

    this.root = new GameView().element;
    this.root.classList.add(CLASSES[this.data.type]);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    this._interval = null;
  }

  get element() {
    return this.root;
  }

  stopGame() {
    clearInterval(this._interval);
  }

  startGame() {
    this.changeLevel();

    // this._interval = setInterval(() => {
    //   this.model.tick();
    //   this.updateHeader();
    // }, SECOND_MS);
  }

  answer(e, answer) {
    e.preventDefault();
    console.log(e, answer);
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  changeLevel() {
    this.updateHeader();

    const level = new this.LevelView(this.model, this.data);
    // console.log(this);
    level.submitAnswer = (e, answer) => {
      console.log(e, answer);
    };
    // this.answer(level.submitAnswer);
    // this.changeContentView(level);
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }
}

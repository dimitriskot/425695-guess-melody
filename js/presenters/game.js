import GameView from "../views/game";
import HeaderView from "../views/header";
// import GameGenreView from "../views/game-genre";
// import GameArtistView from "../views/game-artist";

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.content = new LevelView(this.model.getCurrentLevel());

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    this._interval = null;
  }

  start() {

  }
}

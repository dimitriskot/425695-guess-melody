import AbstractView from "../common/abstract";
import {CLASSES} from "../../data/constants";
import {getDom} from "../../components/util";

export default class GameView extends AbstractView {
  get template() {
    return null;
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
    return getDom(this.template, CLASSES.game);
  }

  submitAnswer() {}
  toggleAudio() {}
  togglePlayButton() {}
  onPlayButtonClick() {}
}

import AbstractView from "../common/abstract-view";
import {classes} from "../../../data/enums";
import {getDom} from "../../../util";

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
    return getDom(this.template, classes.GAME);
  }

  onSubmitButtonClick() {}
  onPlayButtonClick() {}
}

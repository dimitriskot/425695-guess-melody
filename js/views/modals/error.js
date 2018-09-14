import AbstractView from "../common/abstract";
import {CLASSES} from "../../data/constants";
import {getDom} from "../../components/util";

export default class ErrorView extends AbstractView {
  get template() {
    return `<h2 class="modal__title">Произошла ошибка!</h2>
    <p class="modal__text">Статус: 404. Пожалуйста, перезагрузите страницу.</p>`;
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
    return getDom(this.template, CLASSES.modal);
  }
}

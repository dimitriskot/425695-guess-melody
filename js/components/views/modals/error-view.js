import AbstractView from "../common/abstract-view";
import {ClassName} from "../../../data/enums";
import {getDom} from "../../../util";

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
    return getDom(this.template, ClassName.MODAL);
  }
}

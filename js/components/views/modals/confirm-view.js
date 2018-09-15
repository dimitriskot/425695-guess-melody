import AbstractView from "../common/abstract-view";
import {className} from "../../../data/enums";
import {getDom} from "../../../util";

export default class ConfirmView extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

  get template() {
    return `<button class="modal__close" type="button"><span class="visually-hidden">Закрыть</span></button>
      <h2 class="modal__title">Подтверждение</h2>
      <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
      <div class="modal__buttons">
        <button class="modal__button button">Ок</button>
        <button class="modal__button button">Отмена</button>
      </div>`;
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
    return getDom(this.template, className.MODAL);
  }

  bind() {
    const closeButton = this._element.querySelector(`.modal__close`);
    closeButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onCloseButtonClick();
    });
    const modalButtons = this._element.querySelectorAll(`.modal__button`);
    modalButtons.forEach((button) => button.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onModalButtonClick(e);
    }));
  }

  onModalButtonClick() {}
}

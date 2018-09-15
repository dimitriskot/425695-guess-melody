import ConfirmView from "../views/modals/confirm-view";

export default class ConfirmPresenter {
  constructor(model) {
    this.model = model;
    this.confirm = new ConfirmView(this.model.state);
  }

  get element() {
    return this.confirm.element;
  }

  render() {
    this.confirm.onCloseButtonClick = this.onCloseButtonClick.bind(this);
    this.confirm.onModalButtonClick = this.onModalButtonClick.bind(this);
  }

  onModalButtonClick(e) {
    this.model.confirmRestart(e);
  }

  onCloseButtonClick() {
    this.model.confirmCancel();
  }
}

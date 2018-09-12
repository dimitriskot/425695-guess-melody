import ConfirmView from "../views/modals/confirm";

export default class ConfirmPresenter {
  constructor(model) {
    this.model = model;
    this.confirm = new ConfirmView(this.model.state);
  }

  get element() {
    return this.confirm.element;
  }

  render() {
    this.confirm.oncloseButtonClick = this.oncloseButtonClick.bind(this);
    this.confirm.onModalButtonsClick = this.onModalButtonsClick.bind(this);
  }

  onModalButtonsClick(e) {
    this.model.confirmRestart(e);
  }

  oncloseButtonClick() {
    this.model.confirmCancel();
  }
}

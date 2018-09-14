import WelcomeView from "../views/welcome";

export default class WelcomePresenter {
  constructor(model) {
    this.model = model;
    this.welcome = new WelcomeView();
  }

  get element() {
    return this.welcome.element;
  }

  render(isDataLoaded) {
    const startGameButton = this.welcome.element.querySelector(`.welcome__button`);
    if (!isDataLoaded) {
      startGameButton.classList.add(`welcome__button--loading`);
    } else {
      startGameButton.classList.remove(`welcome__button--loading`);
    }
    startGameButton.disabled = !isDataLoaded;
    this.welcome.onStartGameButtonClick = this.onStartGameButtonClick.bind(this);
  }

  onStartGameButtonClick() {
    this.model.start();
  }
}

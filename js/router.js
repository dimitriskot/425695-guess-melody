import {selectTemplate} from "./components/util";
import WelcomeView from "./views/welcome";
import StatsView from "./views/results/stats";
import FailView from "./views/results/fail";
import GamePresenter from "./presenters/game";
import ConfirmPresenter from "./presenters/confirm";
import GameModel from "./models/game";
import ConfirmModel from "./models/confirm";

export default class Router {

  static showWelcome(game) {
    const welcome = new WelcomeView(game);
    selectTemplate(welcome.element);
  }

  static showGame(game) {
    const gameScreen = new GamePresenter(new GameModel(game));
    selectTemplate(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(data) {
    const stats = new StatsView(data);
    selectTemplate(stats.element);
  }

  static showFail(data) {
    const fail = new FailView(data);
    selectTemplate(fail.element);
  }

  static showConfirm(game) {
    const confirm = new ConfirmPresenter(new ConfirmModel(game));
    selectTemplate(confirm.element);
    confirm.render();
  }
}

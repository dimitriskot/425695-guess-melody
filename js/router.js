import {selectTemplate} from "./components/util";
import {currentGame} from "./data/initial-game";
import GameModel from "./models/game";
import StatsModel from "./models/stats";
import ConfirmModel from "./models/confirm";
import GamePresenter from "./presenters/game";
import StatsPresenter from "./presenters/stats";
import ConfirmPresenter from "./presenters/confirm";
import WelcomeView from "./views/welcome";
import FailView from "./views/results/fail";
import Loader from "./game-logic/loader";

export default class Router {

  constructor() {
    this.data = null;
  }

  static start() {
    Loader.loadData().
      then((data) => {
        this.data = data;
      }).
      then(() => Router.showWelcome(currentGame)).
      catch(Router.showError);
  }

  static showWelcome(game) {
    const welcome = new WelcomeView(game);
    selectTemplate(welcome.element);
  }

  static showGame(game) {
    const gameScreen = new GamePresenter(new GameModel(game, this.data));
    selectTemplate(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(data) {
    const stats = new StatsPresenter(new StatsModel(data));
    stats.render();
    selectTemplate(stats.element);
  }

  static showFail(data) {
    const fail = new FailView(data);
    selectTemplate(fail.element);
  }

  static showConfirm(game) {
    const confirm = new ConfirmPresenter(new ConfirmModel(game));
    confirm.render();
    selectTemplate(confirm.element);
  }
}

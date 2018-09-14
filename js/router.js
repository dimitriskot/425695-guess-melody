import {selectTemplate} from "./components/util";
import WelcomeModel from "./models/welcome";
import GameModel from "./models/game";
import StatsModel from "./models/stats";
import ConfirmModel from "./models/confirm";
import WelcomePresenter from "./presenters/welcome";
import GamePresenter from "./presenters/game";
import StatsPresenter from "./presenters/stats";
import ConfirmPresenter from "./presenters/confirm";
import FailView from "./views/results/fail";
import ErrorView from "./views/modals/error";
import Loader from "./game-logic/loader";

export default class Router {

  constructor() {
    this.data = null;

    this.isDataLoaded = null;
  }

  static showWelcome(game) {
    const welcome = new WelcomePresenter(new WelcomeModel(game));
    welcome.render(this.isDataLoaded);
    selectTemplate(welcome.element);

    this.isDataLoaded = false;
    Loader.loadData().
      then((data) => {
        this.data = data;
        this.isDataLoaded = true;
        welcome.render(this.isDataLoaded);
        selectTemplate(welcome.element);
      }).
      catch(Router.showError);
  }

  static showGame(game) {
    const gameScreen = new GamePresenter(new GameModel(game, this.data));
    gameScreen.startGame();
    selectTemplate(gameScreen.element);
  }

  static showStats(game) {
    Loader.loadResults().
      then((data) => {
        const stats = new StatsPresenter(new StatsModel(game, data));
        stats.render();
        selectTemplate(stats.element);
      }).
      catch(Router.showError);
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

  static showError() {
    const error = new ErrorView();
    selectTemplate(error.element);
  }
}

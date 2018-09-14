import {selectTemplate} from "./util";
import WelcomeModel from "./components/models/welcome-model";
import GameModel from "./components/models/game-model";
import StatsModel from "./components/models/stats-model";
import ConfirmModel from "./components/models/confirm-model";
import WelcomePresenter from "./components/presenters/welcome-presenter";
import GamePresenter from "./components/presenters/game-presenter";
import StatsPresenter from "./components/presenters/stats-presenter";
import ConfirmPresenter from "./components/presenters/confirm-presenter";
import FailView from "./components/views/results/fail-view";
import ErrorView from "./components/views/modals/error-view";
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

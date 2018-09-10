import {selectTemplate} from "./components/util";
import WelcomeView from "./views/welcome";
import GamePresenter from "./presenters/game";
import GameModel from "./models/game";
// import StatsScreen from './stats/stats-screen.js';

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

  // static showStats(model) {
  //   const statistics = new StatsScreen(model);
  //   selectTemplate(statistics.element);
  // }
}

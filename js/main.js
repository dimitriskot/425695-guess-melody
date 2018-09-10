// import {selectTemplate} from "./components/util";
// import WelcomeView from "./components/welcome";
import {currentGame} from "./data/initial-game";
import Router from "./router";

// const welcome = new WelcomeView(currentGame);
// selectTemplate(welcome.element);
Router.showWelcome(currentGame);

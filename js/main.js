import {selectTemplate} from "./components/util";
import WelcomeView from "./components/welcome";
import {currentGame} from "./data/initial-game";

const welcome = new WelcomeView(currentGame);
selectTemplate(welcome.element);

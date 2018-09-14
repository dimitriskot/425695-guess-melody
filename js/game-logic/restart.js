import Router from "../router";
import {confirms} from "../data/enums";
import {currentGame} from "../data/initial-game";

export const confirmRestart = (game, e) => {
  if (e.target.innerText === confirms.OK) {
    Router.showGame(currentGame);
    return;
  }
  if (e.target.innerText === confirms.CANCEL) {
    Router.showGame(game);
    return;
  }
};

export const cancelRestart = (game) => {
  Router.showGame(game);
};

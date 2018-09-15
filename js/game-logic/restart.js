import Router from "../router";
import {confirm} from "../data/enums";
import {currentGame} from "../data/initial-game";

export const confirmRestart = (game, e) => {
  if (e.target.innerText === confirm.OK) {
    Router.showGame(currentGame);
    return;
  }
  if (e.target.innerText === confirm.CANCEL) {
    Router.showGame(game);
    return;
  }
};

export const cancelRestart = (game) => {
  Router.showGame(game);
};

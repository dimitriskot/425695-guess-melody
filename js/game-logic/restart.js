import Router from "../router";
import {Confirm} from "../data/enums";
import {currentGame} from "../data/initial-game";

export const confirmRestart = (game, e) => {
  if (e.target.innerText === Confirm.OK) {
    Router.showGame(currentGame);
    return;
  }
  if (e.target.innerText === Confirm.CANCEL) {
    Router.showGame(game);
    return;
  }
};

export const cancelRestart = (game) => {
  Router.showGame(game);
};

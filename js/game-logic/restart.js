import Router from "../router";
import {CONFIRM} from "../data/constants";
import {currentGame} from "../data/initial-game";

export const getConfirm = (game, e) => {
  if (e.target.innerText === CONFIRM.ok) {
    Router.showGame(currentGame);
    return;
  }
  if (e.target.innerText === CONFIRM.cancel) {
    Router.showGame(game);
    return;
  }
};

export const cancelRestart = (game) => {
  Router.showGame(game);
};

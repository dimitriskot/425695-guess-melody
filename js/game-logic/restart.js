import {currentGame} from "../data/initial-game";
import {CONFIRM} from "../data/constants";
import Router from "../router";

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

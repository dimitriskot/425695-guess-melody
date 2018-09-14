import Router from "../router";
import {FAILS} from "../data/constants";
import {getPlayerProgress} from "./player-progress";

const getResults = (game) => {
  const playerProgress = getPlayerProgress(game);
  if (playerProgress.time.total <= 0) {
    Router.showFail(FAILS.time);
    return;
  }
  if (playerProgress.lives === 0) {
    Router.showFail(FAILS.tries);
    return;
  }
  Router.showStats(game);
};

export default getResults;

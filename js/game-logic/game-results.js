import Router from "../router";
import {fails} from "../data/enums";
import {getPlayerProgress} from "./player-progress";

const getResults = (game) => {
  const playerProgress = getPlayerProgress(game);
  if (playerProgress.time.total <= 0) {
    Router.showFail(fails.TIME);
    return;
  }
  if (playerProgress.lives === 0) {
    Router.showFail(fails.TRIES);
    return;
  }
  Router.showStats(game);
};

export default getResults;

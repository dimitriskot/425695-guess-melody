import Router from "../router";
import {fail} from "../data/enums";
import {getPlayerProgress} from "./player-progress";

const getResults = (game) => {
  const playerProgress = getPlayerProgress(game);
  if (playerProgress.time.total <= 0) {
    Router.showFail(fail.TIME);
    return;
  }
  if (playerProgress.lives === 0) {
    Router.showFail(fail.TRIES);
    return;
  }
  Router.showStats(game);
};

export default getResults;

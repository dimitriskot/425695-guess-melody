import Router from "../router";
import {Fail} from "../data/enums";
import {getPlayerProgress} from "./player-progress";

const getResults = (game) => {
  const playerProgress = getPlayerProgress(game);
  if (playerProgress.time.total <= 0) {
    Router.showFail(Fail.TIME);
    return;
  }
  if (playerProgress.lives === 0) {
    Router.showFail(Fail.TRIES);
    return;
  }
  Router.showStats(game);
};

export default getResults;

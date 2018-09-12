import Router from "../router";
import {FAILS} from "../data/constants";
import {getPlayerProgress, getDetailedPlayerProgress} from "./player-progress";

const getGameResults = (game, statistics) => {
  const playerProgress = getPlayerProgress(game);
  if (playerProgress.time <= 0) {
    Router.showFail(FAILS.time);
    return;
  }
  if (playerProgress.lives === 0) {
    Router.showFail(FAILS.tries);
    return;
  }
  let newStatistics = statistics;
  newStatistics.push(playerProgress.score);
  newStatistics = newStatistics.sort((scoreA, scoreB) => scoreB - scoreA);
  const playerPosition = newStatistics.indexOf(playerProgress.score) + 1;
  const worstStatistics = newStatistics.slice(playerPosition);
  const worstPercent = (100 * worstStatistics.length / newStatistics.length).toFixed(0);
  const stats = {
    position: playerPosition,
    places: newStatistics.length,
    percent: worstPercent
  };
  const progress = getDetailedPlayerProgress(game);
  const results = {
    progress,
    stats
  };
  Router.showStats(results);
};

export default getGameResults;

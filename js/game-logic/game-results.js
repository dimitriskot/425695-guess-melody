import {getPlayerProgress} from "./player-progress";
import {FAILS} from "../data/constants";
import Router from "../router";

const getGameResults = (progress, statistics) => {
  const playerProgress = getPlayerProgress(progress);
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
  const results = {
    position: playerPosition,
    places: newStatistics.length,
    percent: worstPercent
  };
  Router.showStats(results);
};

export default getGameResults;

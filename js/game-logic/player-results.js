import {selectTemplate} from "../components/util";
import {getPlayerProgress} from "./player-progress";
import {FAILS} from "../data/constants";
import FailView from "../components/common/fail-view";
import ResultSuccessView from "../components/result-success";

const getPlayerResults = (statistics, progress) => {
  const playerProgress = getPlayerProgress(progress);
  if (playerProgress.time < 0) {
    const fail = new FailView(FAILS.time).element;
    selectTemplate(fail);
    return;
  }
  if (playerProgress.lives === 0) {
    const fail = new FailView(FAILS.tries).element;
    selectTemplate(fail);
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
  const resultsSuccess = new ResultSuccessView(results).element;
  selectTemplate(resultsSuccess);
};

export default getPlayerResults;

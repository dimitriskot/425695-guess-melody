import {getPlayerProgress} from "./player-progress";

const getPlayerResults = (statistics, progress) => {
  const playerProgress = getPlayerProgress(progress);
  if (playerProgress.time < 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }
  if (playerProgress.lives === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  let newStatistics = statistics;
  newStatistics.push(playerProgress.score);
  newStatistics = newStatistics.sort((scoreA, scoreB) => scoreB - scoreA);
  const playerPosition = newStatistics.indexOf(playerProgress.score) + 1;
  const worstStatistics = newStatistics.slice(playerPosition);
  const worstPercent = (100 * worstStatistics.length / newStatistics.length).toFixed(0);
  return `Вы заняли ${playerPosition} место из ${newStatistics.length}. Это лучше, чем у ${worstPercent}% игроков`;
};

export default getPlayerResults;

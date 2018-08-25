import {getPlayerProgress} from "./player-progress";

// const SECOND_MS = 1000;
// const MINUTE_MS = SECOND_MS * 60;
// const GAME_TIME_LIMIT = MINUTE_MS * 5;

export const getPlayerResults = (statistics, progress) => {
// console.log(`statistics`, statistics);
  const playerProgress = getPlayerProgress(progress);
  if (playerProgress.leftTime < 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }
  if (playerProgress.leftNotes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  let newStatistics = statistics;
  // console.log(`newStatistics`, newStatistics);
  newStatistics.push(playerProgress.score);
  // console.log(`newStatistics`, newStatistics);
  newStatistics = newStatistics.sort((scoreA, scoreB) => scoreB - scoreA);
  //   console.log(`newStatistics`, newStatistics);
  const playerPosition = newStatistics.indexOf(playerProgress.score) + 1;
  //   console.log(`playerPosition`, playerPosition);
  const worstStatistics = newStatistics.slice(playerPosition);
  //   console.log(`worstStatistics`, worstStatistics);
  const worstPercent = (100 * worstStatistics.length / newStatistics.length).toFixed(0);
  //   console.log(`worstPercent`, worstPercent);
  return `Вы заняли ${playerPosition} место из ${newStatistics.length}. Это лучше, чем у ${worstPercent}% игроков`;
};

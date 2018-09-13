import {GAME_TIME, LIVES} from "../data/constants";
import getScoreCount from "./score-count";

export const getPlayerProgress = (game) => {
  const score = getScoreCount(game).total;
  const lives = game.lives;
  const time = game.time;
  return {
    score,
    lives,
    time
  };
};

export const getDetailedPlayerProgress = (game) => {
  const score = getScoreCount(game);
  const time = GAME_TIME - game.time.total;
  const minutes = new Date(time).getMinutes();
  const seconds = new Date(time).getSeconds();
  const mistakes = LIVES - game.lives;
  return {
    time: {
      minutes,
      seconds
    },
    score,
    mistakes
  };
};

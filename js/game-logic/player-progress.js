import getScoreCount from "./score-count";

export const getPlayerProgress = (game) => {
  const score = getScoreCount(game);
  const lives = game.lives;
  const time = game.time;
  return {
    score,
    lives,
    time
  };
};

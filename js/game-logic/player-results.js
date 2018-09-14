import {getDetailedPlayerProgress} from "./player-progress";

const getPlayerResults = (game, gameStats) => {
  const progress = getDetailedPlayerProgress(game);
  const newGameStats = {
    date: new Date(),
    score: progress.score.total
  };

  const scores = gameStats ? gameStats.map((el) => el.score) : [];

  scores.push(progress.score.total);
  const places = scores.length;

  if (scores.length > 0) {
    scores.sort((scoreA, scoreB) => scoreB - scoreA);
  }

  const position = scores.lastIndexOf(progress.score.total) + 1;
  const worstScores = scores.slice(position);
  const percent = (100 * worstScores.length / scores.length).toFixed(0);

  const stats = {
    position,
    places,
    percent
  };

  const results = {
    describe: {
      progress,
      stats
    },
    newGameStats
  };

  return results;
};

export default getPlayerResults;

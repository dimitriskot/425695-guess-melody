const subLevelsCount = (game) => {
  const newLevelsCount = game.levelsCount - 1;
  const newGame = Object.assign({}, game, {
    levelsCount: newLevelsCount
  });
  return newGame;
};

export default subLevelsCount;

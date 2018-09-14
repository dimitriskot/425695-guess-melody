const substractPlayerLives = (game) => {
  if (typeof game.lives !== `number`) {
    throw new Error(`ERROR! Lives must be a number`);
  }
  if (game.lives <= 0) {
    throw new Error(`ERROR! There is no more lives`);
  }
  const newLives = game.lives - 1;
  const newGame = Object.assign({}, game, {
    lives: newLives
  });
  return newGame;
};

export default substractPlayerLives;

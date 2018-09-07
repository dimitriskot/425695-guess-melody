const subPlayerLives = (game) => {
  const newLives = game.lives - 1;
  const newGame = Object.assign({}, game, {
    lives: newLives
  });
  return newGame;
};

export default subPlayerLives;

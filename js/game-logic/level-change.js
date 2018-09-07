export const levelChange = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level argument must be a number`);
  }
  if (level < 0) {
    throw new Error(`Level argument should not be a negative value`);
  }
  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
};

const calculateLives = (game, lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }

  if (lives > game.lives) {
    throw new Error(`Lives should not be more then initial value`);
  }

  const newLives = game.lives - lives;
  const newGame = Object.assign({}, game, {
    lives: newLives
  });
  return newGame;
};
export default calculateLives;

// const getPlayerLives = (leftLives, answerSuccess) => {
//   if (leftLives === 0) {
//     throw new Error(`ERROR! There is no more lives`);
//   }
//   if (answerSuccess) {
//     return leftLives;
//   }
//   const newLivesCount = leftLives - 1;
//   return newLivesCount;
// };

// export default getPlayerLives;

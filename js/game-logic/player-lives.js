const getPlayerLives = (leftLives, answerSuccess) => {
  if (leftLives === 0) {
    throw new Error(`ERROR! There is no more lives`);
  }
  if (answerSuccess) {
    return leftLives;
  }
  const newLivesCount = leftLives - 1;
  return newLivesCount;
};

export default getPlayerLives;

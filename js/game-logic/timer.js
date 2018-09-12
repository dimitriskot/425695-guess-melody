export const subGameTime = (game, time) => {
  if (typeof time !== `number`) {
    throw new Error(`The time argument must be a number`);
  }

  if (time < 0) {
    throw new Error(`The time argument must be greater than zero`);
  }

  const newTimeTotal = game.time.total - time;
  const newTime = Object.assign({}, game.time, {
    total: newTimeTotal
  });
  const newGame = Object.assign({}, game, {
    time: newTime
  });
  return newGame;
};

export const calcLevelTime = (game, time) => {
  if (typeof time !== `number`) {
    throw new Error(`The time argument must be a number`);
  }

  if (time < 0) {
    throw new Error(`The time argument must be greater than zero`);
  }

  const newTimeLevel = game.time.level + time;
  const newTime = Object.assign({}, game.time, {
    level: newTimeLevel
  });
  const newGame = Object.assign({}, game, {
    time: newTime
  });
  return newGame;
};

export const clearLevelTime = (game) => {
  const newTimeLevel = 0;
  const newTime = Object.assign({}, game.time, {
    level: newTimeLevel
  });
  const newGame = Object.assign({}, game, {
    time: newTime
  });
  return newGame;
};

const subGameTime = (game, time) => {
  if (typeof time !== `number`) {
    throw new Error(`The time argument must be a number`);
  }

  if (time < 0) {
    throw new Error(`The time argument must be greater than zero`);
  }

  const newTime = game.time - time;
  const newGame = Object.assign({}, game, {
    time: newTime
  });
  return newGame;
};
export default subGameTime;

// export const tick = (game) => {

// }

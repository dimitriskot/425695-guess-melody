export const timer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`The time argument must be a number`);
  }
  if (time <= 0) {
    throw new Error(`The time argument must be greater than zero`);
  }
  const newTime = time - 1;
  return newTime;
};

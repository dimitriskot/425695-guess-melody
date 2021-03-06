const minutes = new Map([
  [`минуту`, new Set([1])],
  [`минуты`, new Set([2, 3, 4])],
  [`минут`, new Set([0, 5])],
]);

const seconds = new Map([
  [`секунду`, new Set([1, 21, 31, 41, 51])],
  [`секунды`, new Set([2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54])],
  [`секунд`, new Set([0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 59, 60])],
]);

const fastAnswers = new Map([
  [`быстрый`, new Set([1])],
  [`быстрых`, new Set([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])]
]);

const mistakes = new Map([
  [`ошибок`, new Set([0])],
  [`ошибку`, new Set([1])],
  [`ошибки`, new Set([2])]
]);

export const DICT = {
  time: {
    minutes,
    seconds
  },
  fastAnswers,
  mistakes
};

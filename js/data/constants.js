export const SECOND_MS = 1000;
export const MINUTE_MS = SECOND_MS * 60;
export const HALF_MINUTE_MS = MINUTE_MS / 2;
export const LIVES = 3;
export const GAME_TIME = MINUTE_MS * 5;
export const LEVELS_COUNT = 10;
export const CLASSES = {
  welcome: [`welcome`],
  genre: [`game--genre`],
  artists: [`game--artist`]
};
export const FAILS = {
  time: {
    title: `Увы и ах!`,
    message: `Время вышло! Вы не успели отгадать все мелодии`
  },
  tries: {
    title: `Какая жалость!`,
    message: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`
  }
};
export const CONFIRM = {
  ok: `Ок`,
  cancel: `Отмена`
};

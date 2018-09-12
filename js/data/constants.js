export const SECOND_MS = 1000;
export const MINUTE_MS = SECOND_MS * 60;
export const FAST_RIGHT_ANSWER_TIME = SECOND_MS * 30;
export const LIVES = 3;
export const GAME_TIME = MINUTE_MS * 5;
export const SERVER_URL = `https://es.dump.academy/guess-melody/questions`;
export const GRADE = {
  usual: 1,
  bonus: 2,
  fail: 2
};
export const CLASSES = {
  welcome: [`welcome`],
  genre: [`game--genre`],
  artist: [`game--artist`]
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

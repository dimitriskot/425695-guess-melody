import {GAME_TIME, LIVES} from "./constants";

export const initialState = Object.freeze({
  level: 0,
  lives: LIVES,
  time: {
    total: GAME_TIME,
    level: 0
  },
  answerTemplate: {
    isSuccess: null,
    time: null
  },
  answers: []
});

export const currentGame = Object.assign({}, initialState);

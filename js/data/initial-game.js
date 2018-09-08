import {MINUTE_MS} from "./constants";

export const initialState = Object.freeze({
  level: 0,
  levelsCount: 10,
  lives: 3,
  time: MINUTE_MS * 5,
  answerTemplate: {
    success: null,
    time: null
  },
  answers: []
});

export const currentGame = Object.assign({}, initialState);

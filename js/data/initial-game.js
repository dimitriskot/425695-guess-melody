import {MINUTES_MS} from "./constants";

export const initialState = Object.freeze({
  level: 0,
  lives: 3,
  answerTemplate: {
    success: null,
    time: null
  },
  answers: [],
  time: MINUTES_MS * 5,
  levelsCount: 10
});

export const currentGame = Object.assign({}, initialState);

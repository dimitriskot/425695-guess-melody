import {GAME_TIME, LEVELS_COUNT, LIVES} from "./constants";

export const initialState = Object.freeze({
  level: 0,
  levelsCount: LEVELS_COUNT,
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

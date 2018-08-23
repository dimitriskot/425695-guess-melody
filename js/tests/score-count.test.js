import {assert} from 'chai';
import {countScore} from "../components/game-artist";

const LIVES = 3;
const QUESTIONS = 10;
const SECOND_MS = 1000;
const MINUTE_MS = SECOND_MS * 60;
const TIME = MINUTE_MS * 5;
const FAST_RIGHT_ANSWER_TIME = SECOND_MS * 30;

const firstPlayerAnswers = [
  {
    success: true,
    time: SECOND_MS * 2
  },
  {
    success: true,
    time: SECOND_MS * 2
  },
  {
    success: true,
    time: SECOND_MS * 2
  },
  {
    success: true,
    time: SECOND_MS * 2
  },
  {
    success: true,
    time: SECOND_MS * 2
  },
  {
    success: true,
    time: SECOND_MS * 2
  },
  {
    success: false,
    time: SECOND_MS * 2
  },
  {
    success: false,
    time: SECOND_MS * 2
  },
  {
    success: true,
    time: SECOND_MS * 2
  },
  {
    success: true,
    time: SECOND_MS * 2
  }
];

// const firstPlayerleftNotes = ;


const countScore = (playerAnswers, leftNotes) => {
  let rightAnswers;
  const score = playerAnswers.
    forEach((answer) => {
      !answer.success ?
      rightAnswers = rightAnswers - 2 :
      answer.time <= FAST_RIGHT_ANSWER_TIME ?
      rightAnswers = rightAnswers + 2 :
      rightAnswers++;
    })

  return score;
};

describe(`Counting player's game score`, () => {
  it(`should return -1 when the value is not present`, () => {
    assert.equal(-1, [1, 2, 3].indexOf(4));
  });
});

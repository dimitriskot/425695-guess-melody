import {assert} from "chai";
import {results} from "../data/results";
import {getScoreCount} from "../game-logic/score-count";

describe(`Counting player's game score`, () => {
  it(`right answers: 10, of them fast answers: 0, wrong answers: 0, notes left: 3. sholud return score: 10`, () => {
    assert.equal(10, getScoreCount(results[0].answers, results[0].leftNotes));
  });
  it(`right answers: 10, of them fast answers: 5, wrong answers: 0, notes left: 3. sholud return score: 15`, () => {
    assert.equal(15, getScoreCount(results[1].answers, results[1].leftNotes));
  });
  it(`right answers: 9, of them fast answers: 0, wrong answers: 0, notes left: 3. time is out sholud return score: 9`, () => {
    assert.equal(9, getScoreCount(results[2].answers, results[2].leftNotes));
  });
  it(`right answers: 9, of them fast answers: 5, wrong answers: 0, notes left: 3. time is out sholud return score: 14`, () => {
    assert.equal(14, getScoreCount(results[3].answers, results[3].leftNotes));
  });
  it(`right answers: 9, of them fast answers: 0, wrong answers: 1, notes left: 0. sholud return score: -1`, () => {
    assert.equal(-1, getScoreCount(results[4].answers, results[4].leftNotes));
  });
  it(`right answers: 9, of them fast answers: 5, wrong answers: 1, notes left: 0. sholud return score: -1`, () => {
    assert.equal(-1, getScoreCount(results[4].answers, results[4].leftNotes));
  });
});

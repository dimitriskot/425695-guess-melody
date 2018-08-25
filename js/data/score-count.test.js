import {assert} from "chai";
import {resultsCollection} from "../components/results-collection";
import {countScore} from "../components/count-score";

describe(`Counting player's game score`, () => {
  it(`${resultsCollection[0].description}`, () => {
    assert.equal(countScore(resultsCollection[0].answers, resultsCollection[0].leftNotes), -1);
  });
  it(`${resultsCollection[1].description}`, () => {
    assert.equal(countScore(resultsCollection[1].answers, resultsCollection[1].leftNotes), -1);
  });
  it(`${resultsCollection[2].description}`, () => {
    assert.equal(countScore(resultsCollection[2].answers, resultsCollection[2].leftNotes), 16);
  });
  it(`${resultsCollection[3].description}`, () => {
    assert.equal(countScore(resultsCollection[3].answers, resultsCollection[3].leftNotes), 10);
  });
});

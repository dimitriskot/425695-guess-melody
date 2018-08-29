import {assert} from "chai";
import {timer} from "../game-logic/timer";

describe(`Timer`, () => {
  it(`Time argument: 5 units. Should return 4`, () => {
    assert.equal(4, timer(5));
  });
  it(`Time argument: 4 units. Should return 3`, () => {
    assert.equal(3, timer(4));
  });
  it(`Time argument: 1 unit. Should return 0`, () => {
    assert.equal(0, timer(1));
  });
  it(`Time argument: 0. Should return an error: "The time argument must be greater than zero"`, () => {
    assert.throws(() => timer(0), `The time argument must be greater than zero`);
  });
  it(`Time argument: -5. Should return an error: "The time argument must be greater than zero"`, () => {
    assert.throws(() => timer(-5), `The time argument must be greater than zero`);
  });
  it(`Time argument: an empty object. Should return an error: "The time argument must be a number"`, () => {
    assert.throws(() => timer({}), `The time argument must be a number`);
  });
});

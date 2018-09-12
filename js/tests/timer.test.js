import {assert} from "chai";
import {subGameTime} from "../game-logic/timer";
import {initialState} from "../data/initial-game";

describe(`Timer`, () => {
  it(`Game time: 5 units. Time argument: 1 unit. Should return 4`, () => {
    const newTime = Object.assign({}, initialState.time, {total: 5});
    const currentGame = Object.assign({}, initialState, {time: newTime});
    assert.equal(4, subGameTime(currentGame, 1).time.total);
  });
  it(`Time argument: 0. Should return an error: "The time argument must be greater than zero"`, () => {
    const newTime = Object.assign({}, initialState.time, {total: 5});
    const currentGame = Object.assign({}, initialState, {time: newTime});
    assert.throws(() => subGameTime(currentGame, -1), `The time argument must be greater than zero`);
  });
  it(`Time argument: an empty object. Should return an error: "The time argument must be a number"`, () => {
    const newTime = Object.assign({}, initialState.time, {total: 5});
    const currentGame = Object.assign({}, initialState, {time: newTime});
    assert.throws(() => subGameTime(currentGame, {}), `The time argument must be a number`);
  });
});

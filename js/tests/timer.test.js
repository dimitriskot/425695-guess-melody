import {assert} from "chai";
import {subGameTime} from "../game-logic/timer";
import {initialState} from "../data/initial-game";

describe(`Timer`, () => {
  it(`Game time: 5 units. Time argument: 1 unit. Should return 4`, () => {
    const currentGame = Object.assign({}, initialState, {time: 5});
    assert.equal(4, subGameTime(currentGame, 1).time);
  });
  it(`Time argument: 0. Should return an error: "The time argument must be greater than zero"`, () => {
    const currentGame = Object.assign({}, initialState, {time: 5});
    assert.throws(() => subGameTime(currentGame, -1), `The time argument must be greater than zero`);
  });
  it(`Time argument: an empty object. Should return an error: "The time argument must be a number"`, () => {
    const currentGame = Object.assign({}, initialState, {time: 5});
    assert.throws(() => subGameTime(currentGame, {}), `The time argument must be a number`);
  });
});

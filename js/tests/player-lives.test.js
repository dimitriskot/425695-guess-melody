import {assert} from "chai";
import {initialState} from "../data/initial-game";
import subPlayerLives from "../game-logic/player-lives";

describe(`Substracting player's lives`, () => {
  it(`lives value: 3. sholud return lives left: 2`, () => {
    const currentGame = Object.assign({}, initialState);
    assert.equal(2, subPlayerLives(currentGame).lives);
  });
  it(`lives value: an empty array. sholud report a type error`, () => {
    const currentGame = Object.assign({}, initialState, {lives: []});
    assert.throws(() => subPlayerLives(currentGame), /ERROR! Lives must be a number/);
  });
  it(`lives value: 0. sholud report an error about lack of lives`, () => {
    const currentGame = Object.assign({}, initialState, {lives: 0});
    assert.throws(() => subPlayerLives(currentGame), /ERROR! There is no more lives/);
  });
});

import {assert} from 'chai';
import {currentGame} from "../data/initial-game";
import levelChange from '../game-logic/level-change';

describe(`Changing level`, () => {
  it(`Next level (argument): 1. Should return: 1`, () => {
    assert.equal(levelChange(currentGame, 1).level, 1);
  });
  it(`Next level (argument): 0. Should return: 0`, () => {
    assert.equal(levelChange(currentGame, 0).level, 0);
  });
  it(`Next level (argument): -1. Should return: "Level argument should not be a negative value"`, () => {
    assert.throw(() => levelChange(currentGame, -1).level, `Level argument should not be a negative value`);
  });
  it(`Next level (argument): an empty object. Should return: "Level argument must be a number"`, () => {
    assert.throw(() => levelChange(currentGame, {}).level, `Level argument must be a number`);
  });
  it(`Next level (argument): nothing. Should return: "Level argument must be a number"`, () => {
    assert.throw(() => levelChange(currentGame).level, `Level argument must be a number`);
  });
});

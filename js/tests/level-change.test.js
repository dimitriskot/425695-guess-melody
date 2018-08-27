import {assert} from 'chai';
import {INITIAL_GAME, levelChange} from '../game-logic/level-change';

describe(`Changing level`, () => {
  it(`Next level (argument): 1. Should return: 1`, () => {
    assert.equal(levelChange(INITIAL_GAME, 1).level, 1);
  });
  it(`Next level (argument): 3. Should return: 3`, () => {
    assert.equal(levelChange(INITIAL_GAME, 3).level, 3);
  });
  it(`Next level (argument): 6. Should return: 6`, () => {
    assert.equal(levelChange(INITIAL_GAME, 6).level, 6);
  });
  it(`Next level (argument): 0. Should return: 0`, () => {
    assert.equal(levelChange(INITIAL_GAME, 0).level, 0);
  });
  it(`Next level (argument): -1. Should return: "Level argument should not be a negative value"`, () => {
    assert.throw(() => levelChange(INITIAL_GAME, -1).level, `Level argument should not be a negative value`);
  });
  it(`Next level (argument): an empty object. Should return: "Level argument must be a number"`, () => {
    assert.throw(() => levelChange(INITIAL_GAME, {}).level, `Level argument must be a number`);
  });
});

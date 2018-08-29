import {assert} from 'chai';
import {INITIAL_GAME, levelChange} from '../game-logic/level-change';

describe(`Changing level`, () => {
  it(`Next level (argument): 1. Should return: 1`, () => {
    assert.equal(levelChange(INITIAL_GAME, 1).level, 1);
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
  it(`Next level (argument): nothing. Should return: "Level argument must be a number"`, () => {
    assert.throw(() => levelChange(INITIAL_GAME).level, `Level argument must be a number`);
  });
});

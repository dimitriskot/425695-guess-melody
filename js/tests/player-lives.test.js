import {
  assert
} from "chai";
import {
  results
} from "../data/results";
import {
  getPlayerLives
} from "../game-logic/player-lives";

describe(`Counting player's lives left`, () => {
  it(`wrong answers become: 0, lives left: 3. sholud return lives left: 3`, () => {
    assert.equal(3, getPlayerLives(results[6].leftNotes, true));
  });
  it(`wrong answers become: 0, lives left: 2. sholud return lives left: 2`, () => {
    assert.equal(2, getPlayerLives(results[7].leftNotes, true));
  });
  it(`wrong answers become: 0, lives left: 1. sholud return lives left: 1`, () => {
    assert.equal(1, getPlayerLives(results[8].leftNotes, true));
  });
  it(`wrong answers become: 1, lives left: 3. sholud return lives left: 2`, () => {
    assert.equal(2, getPlayerLives(results[9].leftNotes, false));
  });
  it(`wrong answers become: 2, lives left: 2. sholud return lives left: 1`, () => {
    assert.equal(1, getPlayerLives(results[10].leftNotes, false));
  });
  it(`wrong answers become: 3, lives left: 1. sholud return lives left: 0`, () => {
    assert.equal(0, getPlayerLives(results[11].leftNotes, false));
  });
  it(`wrong answers become: 4, lives left: 0. sholud report an error about lack of lives`, () => {
    assert.throws(() => getPlayerLives(results[12].leftNotes, false), /ERROR! There is no more lives/);
  });
});

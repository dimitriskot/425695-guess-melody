import {assert} from "chai";
import {results} from "../data/results";
import getPlayerResults from "../game-logic/player-results";

describe(`Getting player's game result`, () => {
  it(`score: 10, wrong answers: 0, notes left: 3, time left: 0, sholud return:
  Вы заняли 1 место из 1. Это лучше, чем у 0% игроков`, () => {
    assert.equal(`Вы заняли 1 место из 1. Это лучше, чем у 0% игроков`, getPlayerResults([], results[0]));
  });
  it(`score: 10, wrong answers: 0, notes left: 3, time left: 0, sholud return:
  Вы заняли 1 место из 2. Это лучше, чем у 50% игроков`, () => {
    assert.equal(`Вы заняли 1 место из 2. Это лучше, чем у 50% игроков`, getPlayerResults([7], results[0]));
  });
  it(`score: 10, wrong answers: 0, notes left: 3, time left: 0, sholud return:
  Вы заняли 4 место из 7. Это лучше, чем у 43% игроков`, () => {
    assert.equal(`Вы заняли 4 место из 7. Это лучше, чем у 43% игроков`, getPlayerResults([6, 7, 9, 12, 13, 14], results[0]));
  });

  it(`score: 15, wrong answers: 0, notes left: 3, time left: 50s, sholud return:
  Вы заняли 1 место из 1. Это лучше, чем у 0% игроков`, () => {
    assert.equal(`Вы заняли 1 место из 1. Это лучше, чем у 0% игроков`, getPlayerResults([], results[1]));
  });
  it(`score: 15, wrong answers: 0, notes left: 3, time left: 50s, sholud return:
  Вы заняли 1 место из 2. Это лучше, чем у 50% игроков`, () => {
    assert.equal(`Вы заняли 1 место из 2. Это лучше, чем у 50% игроков`, getPlayerResults([7], results[1]));
  });
  it(`score: 15, wrong answers: 0, notes left: 3, time left: 50s, sholud return:
  Вы заняли 1 место из 7. Это лучше, чем у 86% игроков`, () => {
    assert.equal(`Вы заняли 1 место из 7. Это лучше, чем у 86% игроков`, getPlayerResults([6, 7, 9, 12, 13, 14], results[1]));
  });

  it(`score: 9, wrong answers: 0, notes left: 3, time left: -1, sholud return:
  Время вышло! Вы не успели отгадать все мелодии`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getPlayerResults([], results[2]));
  });
  it(`score: 9, wrong answers: 0, notes left: 3, time left: -1, sholud return:
  Время вышло! Вы не успели отгадать все мелодии`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getPlayerResults([7], results[2]));
  });
  it(`score: 9, wrong answers: 0, notes left: 3, time left: -1, sholud return:
  Время вышло! Вы не успели отгадать все мелодии`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getPlayerResults([6, 7, 9, 12, 13, 14], results[2]));
  });

  it(`score: 14, wrong answers: 0, notes left: 3, time left: -1, sholud return:
  Время вышло! Вы не успели отгадать все мелодии`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getPlayerResults([], results[3]));
  });
  it(`score: 14, wrong answers: 0, notes left: 3, time left: -1, sholud return:
  Время вышло! Вы не успели отгадать все мелодии`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getPlayerResults([7], results[3]));
  });
  it(`score: 14, wrong answers: 0, notes left: 3, time left: -1, sholud return:
  Время вышло! Вы не успели отгадать все мелодии`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getPlayerResults([6, 7, 9, 12, 13, 14], results[3]));
  });

  it(`score: -1, wrong answers: 1, notes left: 0, time left: 0, sholud return:
  У вас закончились все попытки. Ничего, повезёт в следующий раз!`, () => {
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getPlayerResults([], results[4]));
  });
  it(`score: -1, wrong answers: 1, notes left: 0, time left: 0, sholud return:
  У вас закончились все попытки. Ничего, повезёт в следующий раз!`, () => {
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getPlayerResults([7], results[4]));
  });
  it(`score: -1, wrong answers: 1, notes left: 0, time left: 0, sholud return:
  У вас закончились все попытки. Ничего, повезёт в следующий раз!`, () => {
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getPlayerResults([6, 7, 9, 12, 13, 14], results[4]));
  });

  it(`score: -1, wrong answers: 1, notes left: 0, time left: 50s, sholud return:
  У вас закончились все попытки. Ничего, повезёт в следующий раз!`, () => {
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getPlayerResults([], results[5]));
  });
  it(`score: -1, wrong answers: 1, notes left: 0, time left: 50s, sholud return:
  У вас закончились все попытки. Ничего, повезёт в следующий раз!`, () => {
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getPlayerResults([7], results[5]));
  });
  it(`score: -1, wrong answers: 1, notes left: 0, time left: 50s, sholud return:
  У вас закончились все попытки. Ничего, повезёт в следующий раз!`, () => {
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getPlayerResults([6, 7, 9, 12, 13, 14], results[5]));
  });
});

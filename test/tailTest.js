const assertDeepEqual = require('chai').assert.deepEqual;

const tail = require('../tail');

describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assertDeepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it(`returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assertDeepEqual(tail(words), ["Lighthouse", "Labs"]);
    assertDeepEqual(tail(words).length, 2);

  });

  it(`returns [] for []`, () => {
    const words = [];
    assertDeepEqual(tail(words), []);
    assertDeepEqual(tail(words).length, 0);

  });

});


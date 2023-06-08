const assertDeepEqual = require('chai').assert.deepEqual;

const middle = require('../middle');

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assertDeepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4 ]", () => {
    assertDeepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assertDeepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  
});
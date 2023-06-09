const takeUntil = require('../takeUntil');

const assertArraysEqual = require('../assertArraysEqual');

const result = takeUntil([1, 2, 3, 8], function(x) {
  return x < 5;
});

assertArraysEqual(result, [1, 2, 3]);
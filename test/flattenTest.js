const flatten = require('../flatten');

const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);
assertArraysEqual(flatten([1, 2, [3, 4], 5]), [1, 2, [3, 4], 5]);
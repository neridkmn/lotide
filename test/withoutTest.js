const without = require('../without');

const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(without([1, 2, 3, 4, 5], [4, 5]), [1, 2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 1, 1, 2], [1]), [2, 2]);

assertArraysEqual(without([1, 2, 3, 4, 5], [5, 2, 3, 4, 1]), []);

assertArraysEqual(without([1, 2, 3, 4, 5], []), [1, 2, 3, 4, 5]);
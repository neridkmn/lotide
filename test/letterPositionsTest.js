const letterPositions = require('../letterPositions');

const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(letterPositions("hello").l, [2, 3]);
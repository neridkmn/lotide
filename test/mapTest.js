const map = require('../map');

const assertArraysEqual = require('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]); // 1st word is the func arg. 2nd word= returned value
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// const results2 = map(words, function (element) { return element.length });
const results2 = map(words, element => element.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

// const results3 = map(words, function (element) { return element + element });
const results3 = map(words, element => element + element);
assertArraysEqual(results3, ["groundground", "controlcontrol", "toto", "majormajor", "tomtom"]);
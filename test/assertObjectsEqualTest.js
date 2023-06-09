const assertObjectsEqual = require('../assertObjectsEqual');

const testObj1 = {
  num: 4,
  name: 'neri'
};

const testObj2 = {
  num: 4,
  name: 'neri',
  age: 37
};

assertObjectsEqual(testObj1, testObj2);
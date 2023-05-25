const eqObjects = function(obj1, obj2) { //TDD / Test-driven development - Primitives As Values (Implementation)
  if (Object.keys(obj1).length !== Object.keys(obj2).length) { // Return false if objects have different number of keys.
    return false;
  }
  for (const key of Object.keys(obj1)) { //Return false if the values of keys don't match in both objects.
    if (!Array.isArray(obj1[key])) { // if the value is NOT AN ARRAY
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    } else { // the value is an array
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    }
  }
  return true; // Return true because there is no mismatch in values and length of keys is the same.
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // check if both arrays have the same length.
    return false;
  }

  for (let i = 0; i < arr1.length; i++) { // loop over each element & check equality. return false if there is a mismatch
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true; // no mismatches were found so return true.
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actualObj, expectedObj) {
  const inspect = require('util').inspect;
  if (!eqObjects(actualObj, expectedObj)) {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actualObj)} !== ${inspect(expectedObj)}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${inspect(actualObj)} === ${inspect(expectedObj)}`);
  }
};


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
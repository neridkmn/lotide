const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
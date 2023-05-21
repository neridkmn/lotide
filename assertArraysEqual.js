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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅Assertion passed: Two arrays are equal.`);
  } else {
    console.log(`🛑Assertion failed: Two arrays are not equal.`);
  }
};

console.log(assertArraysEqual([5, 3], [3, 2]));
console.log(assertArraysEqual([7, 7], [7, 7]));
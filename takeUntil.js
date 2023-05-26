
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅Assertion passed: Two arrays are equal.`);
  } else {
    console.log(`🛑Assertion failed: Two arrays are not equal.`);
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


// will return a "slice of the array with elements taken from the beginning."
// It should keep going until the callback/predicate returns a truthy value

// the callback should only be provided one value: The item in the array.


const takeUntil = function(array, callback) { // callback returns true or false
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

const result = takeUntil([1, 2, 3, 8], function(x) {
  return x < 5;
});

assertArraysEqual(result, [1, 2, 3]);

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

const middle = function(inputArray) {
  if (inputArray.length <= 2) {
    return [];
  }
  let middleNumbers = [];
  if (inputArray.length % 2 === 0) {
    middleNumbers.push(inputArray[inputArray.length / 2 - 1]);
    middleNumbers.push(inputArray[inputArray.length / 2]);
  } else {
    middleNumbers.push(inputArray[(inputArray.length - 1) / 2]);
  }
  
  return middleNumbers;
};




assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
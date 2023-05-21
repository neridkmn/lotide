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

const flatten = function(inputArray) {
  let flattened = [];
  for (const element of inputArray) {
    if (Array.isArray(element)) { // if element is an array loop over inner array and push items to flattened.
      for (let i = 0; i < element.length; i++) {
        flattened.push(element[i]);
      }
    } else { // if element isn't an array push the element directly to flattened. 
      flattened.push(element);
    }
  }
  return flattened;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);
assertArraysEqual(flatten([1, 2, [3, 4], 5]), [1, 2, [3, 4], 5]);


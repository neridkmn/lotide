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

const without = function(source, itemsToRemove) {
  let filteredArray = [];
  for (let i = 0; i < source.length; i++) {
    const element = source[i];
    let shouldKeepElement = true; // create a Boolean to decide whether to keep the element in the filteredArray.
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (element === itemsToRemove[j]) {     // element itemToRemoveda yoksa filteredArray.push()
        shouldKeepElement = false;
      }
    }
    if (shouldKeepElement === true) { // decide whether to keep the current element in the filteredArray.
      filteredArray.push(element);
    }
  }

  return filteredArray;
};

const withoutRefactored = function(source, itemsToRemove) {
  let filteredArray = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i]) === false) {
      filteredArray.push(source[i]);
    }
  }
  return filteredArray;
};

const withoutRefactored2 = function(source, itemsToRemove) {
  return source.filter(element => !itemsToRemove.includes(element));
};


assertArraysEqual(without([1, 2, 3, 4, 5], [4, 5]), [1, 2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 1, 1, 2], [1]), [2, 2]);

assertArraysEqual(without([1, 2, 3, 4, 5], [5, 2, 3, 4, 1]), []);

assertArraysEqual(without([1, 2, 3, 4, 5], []), [1, 2, 3, 4, 5]);
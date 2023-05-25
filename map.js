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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]); // 1st word is the func arg. 2nd word= returned value

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// const results2 = map(words, function (element) { return element.length });
const results2 = map(words, element => element.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

// const results3 = map(words, function (element) { return element + element });
const results3 = map(words, element => element + element);
assertArraysEqual(results3, ["groundground", "controlcontrol", "toto", "majormajor", "tomtom"]);
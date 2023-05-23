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



const letterPositions = function(sentence) {
  const results = {};

  // logic to update results here
  const lowerCase = sentence.toLowerCase();
  for (let i = 0; i < lowerCase.length; i++) {

    console.log(results);


    if (results[sentence[i]]) { // key is defined
      results[sentence[i]] = [...results[sentence[i]], i]; // for the second identical element
    } else {
      results[sentence[i]] = [i];
    }
  }



  return results;
};


assertArraysEqual(letterPositions("hello").l, [2, 3]);
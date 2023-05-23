const assertEqual = function(actual, expected) { // can only compare primitive values
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
  return true; // Return true because ther is no mismatch in values and length of keys is the same.
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
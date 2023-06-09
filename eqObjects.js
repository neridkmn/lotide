
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;


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

module.exports = takeUntil;







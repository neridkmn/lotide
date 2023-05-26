const assertEqual = function(actual, expected) { // can only compare primitive values
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

assertEqual(result1, "noma");

const callback2 = function(obj) {
  return obj.name === "murat";
};

const result2 = findKey({
  person1: { name: "neri" },
  person2: { name: "murat" }
}, callback2);

assertEqual(result2, "person2");


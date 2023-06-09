const findKey = require('../findKey');

const assertEqual = require('../assertEqual');

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

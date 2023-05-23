const assertEqual = function(actual, expected) { // can only compare primitive values
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {  // In order to know how many Jason's are in our list, we need to scan the entire list. Let's start with a simple loop and make sure it 'works.
    // inside the loop,
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.


    if (itemsToCount[item]) { // Add an if condition to only increment our count in results if the item is found in the itemsToCount object.
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

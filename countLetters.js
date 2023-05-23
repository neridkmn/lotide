const assertEqual = function(actual, expected) { // can only compare primitive values
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(arg) {
  const lowerCase = arg.toLowerCase();
  let lettersToReturn = {};
  for (const item of lowerCase) {
    if (item !== " ") {
      if (lettersToReturn[item] === undefined) { // define letters
        lettersToReturn[item] = 1;
      } else {  // is already defined
        lettersToReturn[item] = lettersToReturn[item] + 1; 
      }
    }
  }
  return lettersToReturn;
};





const result1 = countLetters("Today is Tuesday");
assertEqual(result1["t"], 2);
assertEqual(result1["c"], undefined);
assertEqual(result1["u"], 1);
assertEqual(result1[" "], undefined);

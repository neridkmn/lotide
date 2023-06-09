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

module.exports = countLetters;
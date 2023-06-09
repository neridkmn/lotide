
const letterPositions = function(sentence) {
  const results = {};

  const lowerCase = sentence.toLowerCase();
  for (let i = 0; i < lowerCase.length; i++) {

    if (results[sentence[i]]) { // key is defined
      results[sentence[i]] = [...results[sentence[i]], i]; // for the second identical element
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;



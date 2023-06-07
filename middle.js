const middle = function(inputArray) {
  if (inputArray.length <= 2) {
    return [];
  }
  let middleNumbers = [];
  if (inputArray.length % 2 === 0) {
    middleNumbers.push(inputArray[inputArray.length / 2 - 1]);
    middleNumbers.push(inputArray[inputArray.length / 2]);
  } else {
    middleNumbers.push(inputArray[(inputArray.length - 1) / 2]);
  }
  
  return middleNumbers;
};


module.exports = middle;

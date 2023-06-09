
const without = function(source, itemsToRemove) {
  let filteredArray = [];
  for (let i = 0; i < source.length; i++) {
    const element = source[i];
    let shouldKeepElement = true; // create a Boolean to decide whether to keep the element in the filteredArray.
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (element === itemsToRemove[j]) {     // element itemToRemoveda yoksa filteredArray.push()
        shouldKeepElement = false;
      }
    }
    if (shouldKeepElement === true) { // decide whether to keep the current element in the filteredArray.
      filteredArray.push(element);
    }
  }

  return filteredArray;
};

module.exports = without;

// const withoutRefactored = function(source, itemsToRemove) {
//   let filteredArray = [];
//   for (let i = 0; i < source.length; i++) {
//     if (itemsToRemove.includes(source[i]) === false) {
//       filteredArray.push(source[i]);
//     }
//   }
//   return filteredArray;
// };

// const withoutRefactored2 = function(source, itemsToRemove) {
//   return source.filter(element => !itemsToRemove.includes(element));
// };




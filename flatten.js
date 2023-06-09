const flatten = function(inputArray) {
  let flattened = [];
  for (const element of inputArray) {
    if (Array.isArray(element)) { // if element is an array loop over inner array and push items to flattened.
      for (let i = 0; i < element.length; i++) {
        flattened.push(element[i]);
      }
    } else { // if element isn't an array push the element directly to flattened. 
      flattened.push(element);
    }
  }
  return flattened;
};

module.exports = flatten;



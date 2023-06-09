const findKeyByValue = function(obj, value) {
  for (const item in obj) {
    if (obj[item] === value) {
      return item
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

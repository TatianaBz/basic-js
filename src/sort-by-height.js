const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] == -1) {
      result[i] = arr[i];
    } else {
      current = arr[i];
      for (let j = i + 1; j < arr.length; j += 1) {
        if (arr[j] !== -1) {
          if (current > arr[j]) {
            x = current;
            current = arr[j];
            arr[j] = x;
          }
        }
      }
      result[i] = current;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};

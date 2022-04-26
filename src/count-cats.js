const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(countCats) {
  let number = 0;
  for (let subArr of countCats) {
    for (let elem of subArr) {
    if (elem == '^^')
    number ++;
    }
  }
  return number; 
}

module.exports = {
  countCats
};

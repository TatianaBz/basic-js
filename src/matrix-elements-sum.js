const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  if (matrix.length < 1) return matrix.reduce((s, el) => (s += +el), 0);
  else {
    for (let j = 0; j < matrix[0].length; j += 1) {
      let i = 0;
      while (matrix[i][j] !== 0 && i < matrix.length) {
        sum += matrix[i][j];
        i += 1;
      }
    }
    return sum;
  }
}

module.exports = {
  getMatrixElementsSum,
};

const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let summ = 1;
    for (let i = 0; i < arr.length; i++) {
      let count = 1;
      if (Array.isArray(arr[i])) {
        count += this.calculateDepth(arr[i]);
      }
      if (Math.max(summ, count) == count) {
        summ = count;
      }
    }
    return summ;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};

const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
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
  calculateDepth(arrays) {
    let summ = 1;
    for (let i = 0; i < arrays.length; i++) {
      let count = 1;
       if (Array.isArray(arrays[i])) {
        count += this.calculateDepth(arrays[i]);
      }
      if (Math.max(summ, count) == count) {
        summ = count;
      }
    }
    return summ;
  }

}

module.exports = {
  DepthCalculator
};
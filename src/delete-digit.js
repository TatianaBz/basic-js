const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n + '';
  let res = [];
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    res = str.split('');
    res.splice(i, 1);
    arr[i] = res.join('') * 1;
    console.log(arr[i]);
  }
  return Math.max.apply(null, arr);
}

module.exports = {
  deleteDigit
};

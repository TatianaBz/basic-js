const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let array1 = {};
  let array2 = {};
  let result = 0;
  if (s1 == '' || s2 == '') {
    return result;
  } else {
    for (let el of s1) {
      array1[el] = 0;
    }
    for (let el1 of s2) {
      array2[el1] = 0;
    }
    for (let el of s1) {
      array1[el]++;
    }
    for (let el1 of s2) {
      array2[el1]++;
    }
    for (let el1 in array1) {
      if (el1 in array2) {
        result += Math.min(array1[el1], array2[el1]);
      }
    }
    return result;
  }
}

module.exports = {
  getCommonCharacterCount
};

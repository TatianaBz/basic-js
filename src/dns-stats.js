const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let array = [];
  let arr = [];
  let res = [];
  let obj = {};
  for (let i = 0; i < domains.length; i++) {
    array[i] = domains[i].split('.').reverse();

    res[0] = array[i][0];
    for (let j = 1; j < array[i].length; j++) {
      res[j] = res[j - 1] + '.' + array[i][j];
    }
    res.length = array[i].length;
    for (let el of res) {
      arr.push('.' + el);
    }
  }
  for (let el of arr) {
    obj[el] = 0;
  }
  for (let el of arr) {
    obj[el]++;
  }
  return obj;
}

module.exports = {
  getDNSStats
};

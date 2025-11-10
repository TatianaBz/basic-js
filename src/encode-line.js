const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine( str) {
   if(str != ''){
    let arr = str.split('');
    let count = 0;
    let current = arr[0];
    let result = [];
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] == current) {
        count++;
      } else {
        if(count==1)  result.push(current);
       else
        result.push(count, current);
        count=0;
        current = arr[i];
        i--;
      }
    }
    return result.join('');
  }
  return str;
}

module.exports = {
  encodeLine
};

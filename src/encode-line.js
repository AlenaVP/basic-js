const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine(str) {
  count = 1;
  let resultStr = '';
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      resultStr += (count === 1 ? '' : count) + str[i];
      count = 1;
    }
  }
  return resultStr;
}

module.exports = {
  encodeLine
};

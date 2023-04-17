const { NotImplementedError } = require('../extensions/index.js');

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
  const digits = Array.from(String(n), Number);
  return digits.reduce((max, _, idx) => Math.max(max, +digits.filter((_, i) => i !== idx).join('')), 0);
}

module.exports = {
  deleteDigit
};

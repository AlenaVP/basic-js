const { NotImplementedError } = require('../extensions/index.js');

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
  const map = {};
  for (let domain of domains) {
    let temp = [];
    let idx;
    do {
      temp.push(`.${domain.split('.').reverse().join('.')}`);
      idx = domain.indexOf('.');
      domain = domain.substring(idx + 1);
    } while (idx !== -1);
    temp = temp.reverse();
    for (const part of temp) {
      map[part] = !Object.prototype.hasOwnProperty.call(map, part) ? 1 : +map[part] + 1;
    }
  }
  return map;
}

module.exports = {
  getDNSStats
};

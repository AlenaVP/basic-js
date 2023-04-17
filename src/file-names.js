const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const output = names;
  const map = {};
  for (let i = 0; i < names.length; i++) {
    map[names[i]] = !Object.prototype.hasOwnProperty.call(map, (names[i])) ? 0 : +map[names[i]] + 1;
  }
  const array = Object.entries(map);
  for (let j = 0; j < array.length; j++) {
    const name = array[j][0];
    for (let i = output.length - 1; i >= 0; i--) {
      if (output[i] === name && map[output[i]] > 0) {
        output[i] = `${output[i]}(${map[output[i]]--})`;
        map[output[i]] = !Object.prototype.hasOwnProperty.call(map, output[i])
          ? 0 : +map[output[i]] + 1;
      }
    }
  }
  return output;
}

module.exports = {
  renameFiles
};

const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  for (const line of backyard) {
    for (const elem of line) {
      if (elem === '^^') {
        count++;
      }
    }
  }
  return count;
};

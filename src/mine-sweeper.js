const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const line = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      for (let m = i - 1; m <= i + 1; m++) {
        if (m >= 0 && m <= matrix.length - 1) {
          for (let n = j - 1; n <= j + 1; n++) {
            if (n >= 0 && n <= matrix[i].length - 1) {
              if (m !== i || n !== j) {
                count += matrix[m][n] ? 1 : 0;
              }
            }
          }
        }
      }
      line.push(count);
    }
    resultMatrix.push(line);
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};

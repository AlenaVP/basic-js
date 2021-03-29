const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + this.calculateDepth(...arr.filter(a => Array.isArray(a))) : 0;
  }
};
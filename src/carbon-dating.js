const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') {
    return false;
  }
  const float = parseFloat(sampleActivity);
  if (isNaN(float) || float <= 0 || float > MODERN_ACTIVITY) {
    return false;
  }
  return Math.ceil(HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / float) / 0.693);
};

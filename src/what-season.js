const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  }
  const year = date.getFullYear();
  if (date >= new Date(year, 2, 1) && date < new Date(year, 5, 1)) {
    return 'spring';
  } else if (date >= new Date(year, 5, 1) && date < new Date(year, 8, 1)) {
    return 'summer';
  } else if (date >= new Date(year, 8, 1) && date < new Date(year, 11, 1)) {
    return 'fall';
  } else if (date >= new Date(year, 11, 1) && date < new Date(year, 12, 1)
      || date >= new Date(year, 0, 1) && date < new Date(year, 2, 1)) {
    return 'winter';
  }
};

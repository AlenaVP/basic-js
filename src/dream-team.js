const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) {
    return false;
  }
  const letters = [];
  for (const name of members) {
    if (typeof name !== 'string') {
      continue;
    } else {
      letters.push(name.trim().charAt(0).toUpperCase());
    }
  }
  return letters.sort().join('');
};

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
  // throw new NotImplementedError('Not implemented');
  let count = 1;
  let letter = str[0];
  let results = [];
  str = str.split("");
  for (let i = 1; i < str.length; i++) {
    if (str[i] == str[i-1]) {
      count++;
    } else {
      if (count > 1) {
        results.push(`${count}${str[i-1]}`);
      } else {
        results.push(`${str[i-1]}`);
      }
      count = 1;
    }
  }
  if (str.length > 1) {
    if (count > 1 ) {
      results.push(`${count}${str[str.length-1]}`)
    } else {
      results.push(`${str[str.length-1]}`)
    }
  } 
  return results.join("");
}

module.exports = {
  encodeLine
};

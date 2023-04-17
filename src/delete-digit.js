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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof n === "number" && Number.isInteger(n)) {
    let results = [];
    let arr = String(n).split("");
    for (let i = 0; i < String(n).length; i++) {
      arr.splice(i, 1)
      results.push( Number(arr.join("")) );
      arr = String(n).split("");
    }
    return Math.max.apply(null, results)
  }
}
// console.log(deleteDigit(152))
module.exports = {
  deleteDigit
};

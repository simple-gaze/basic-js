const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // console.log(date)
  let seasons = ["spring", "summer", "autumn", "winter"];
  let month = date.getMonth();
  let dateProps = Object.getOwnPropertyNames(date);
  if (!date && arguments.length === 0) return 'Unable to determine the time of year!';
  
  // for (let i = 0; i < dateProps.length; i++) {
  //   if (date.hasOwnProperty(dateProps[i])) {
  //     throw new Error("Invalid date!");
  //   }
  // }

  
  if (Date.prototype.toString.call(new Date()) == date.toString() || date instanceof Date == false || Object.getOwnPropertyNames(date).length > 0 || typeof date === "string" || typeof date === "number" || typeof date.getMonth !== "function" || typeof Date.prototype.valueOf.call(date) !== "number") {
    throw new Error("Invalid date!");
  } 
    return month >= 2 && month <= 4 ? seasons[0] :
    month >= 5 && month <= 7 ? seasons[1] :
    month >= 8 && month <= 10 ? seasons[2] : seasons[3]
  

  // Date.prototype.isPrototypeOf(date) && date instanceof Date && typeof date !== "string" && typeof date !== "number" && !isNaN(date) Date.prototype.toString.call(new Date()) == date.toString() && isNaN(Date.parse(date)) &&  valueOf()   new Date(Date.prototype.valueOf(date))
}



// console.log(  typeof Date.prototype.valueOf.call(new Date())  ) 
// console.log(Object.getOwnPropertyNames(new Date()).length)
module.exports = {
  getSeason
};

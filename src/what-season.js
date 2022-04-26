const {
  NotImplementedError
} = require('../extensions/index.js');

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
function getSeason(getSeason) {
  if (typeof getSeason == undefined)
    console.log('Unable to determine the time of year!');
  else {
    if (getSeason instanceof Date) {
      let date = getSeason.getMonth();
      switch (date) {
        case date < 2: {
          console.log('winter');
          break;
        }
        case date < 5: {
          console.log('spring');
          break;
        }
        case date < 8: {
          console.log(' summer');
          break;
        }
        case date < 11: {
          console.log('autumn');
          break;
        }
        default:
          console.log('winter');
      }
    } else
      console.log('throw!ErrorInvalid date!');

  }
}

module.exports = {
  getSeason
};
/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    let newMinutes = hours * 60 + minutes + interval;
    newMinutes = newMinutes >= 1440 ? newMinutes % 1440 : newMinutes;
    let retHours = Math.floor(newMinutes / 60);
    let retMinutes = newMinutes % 60;
    if (retHours === 0)
      retHours = '00';
    if (retMinutes === 0)
      retMinutes = '00';
    return (retHours + ':' + retMinutes);
};

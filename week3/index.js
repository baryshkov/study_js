/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
  function convertAndSet(num, format, sign, value) {
    if (sign === '-') {
      num *= -1;
    }
    // console.info(/^hours$/i.test(format));
    switch (true) {
      case /^minutes$/i.test(format):
        value.setUTCMinutes(value.getUTCMinutes() + num);
        break;
      case /^hours$/i.test(format):
        value.setUTCHours(value.getUTCHours() + num);
        break;
      case /^days$/i.test(format):
        value.setUTCDate(value.getUTCDate() + num);
        break;
      case /^months$/i.test(format):
        value.setUTCMonth(value.getUTCMonth() + num);
        break;
      case /^years$/i.test(format):
        value.setUTCFullYear(value.getUTCFullYear() + num);
        break;
    }
  }

  function check(num, format) {
    if (!num || !format || num < 0 ||
        format.search(/^(months|days|hours|minutes|years)$/i) === -1) {
      throw new TypeError('Incorrect data');
    }
  }

  function formatDate(date) {
    return (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' '
        + date.getHours() + ':' + date.getMinutes());
  }

  var time = new Date(date);
  return {
    // time = new Date(date),
    // tt: console.log(this.time),
    add: function (num, format) {
      check(num, format);
      convertAndSet(num, format, '+', time);
      return this;
    },
    subtract: function (num, format) {
      check(num, format);
      convertAndSet(num, format, '-', time);
      return this;
    },
    value: formatDate(time)
  };
};

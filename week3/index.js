/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
  function convertAndSet(num, format, sign, value) {
    if (sign === '-') {
      num *= -1;
    }
    switch (true) {
      case /^minutes$/i.test(format):
        value.setUTCMinutes(value.getUTCMinutes() + num);
        break;
      case /^hours$/i.test(format):
        value.getUTCHours();
        value.setUTCHours(value.getUTCHours() + num);
        value.getUTCHours();

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
    let day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();
    let month = date.getMonth + 1 >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
    let hours = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
    let minutes = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
    return (date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes);
  }

  return {
    time: new Date(date),
    add: function (num, format) {
      check(num, format);
      convertAndSet(num, format, '+', this.time);
      return this;
    },
    subtract: function (num, format) {
      check(num, format);
      convertAndSet(num, format, '-', this.time);
      return this;
    },
    get value() {
      return (formatDate(this.time));
    },
  };
};

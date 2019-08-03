/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
  let retHashtags = hashtags.map(item => item.toLowerCase());
  retHashtags = retHashtags.filter(function(item, index) {
    return retHashtags.indexOf(item) === index;
  });
  return retHashtags.join(', ');
};

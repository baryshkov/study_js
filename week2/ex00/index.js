/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
  let tweets = tweet.split(' ');
  // tweets = tweets.filter(function(item, index) {
  //   return item.charAt(0) === '#';
  // })
  tweets = tweets.filter(item => item.charAt(0) === '#');
  for (let i = 0; i < tweets.length; i++) {
    let temp = tweets[i].split('');
    temp.shift();
    tweets[i] = temp.join('');
  }
  return tweets;
};

module.exports = function metaTruncate(text) {
  let n = 150;
  return (text.length > n) ? text.substr(0, n-1) + ' &hellip;' : text;
}
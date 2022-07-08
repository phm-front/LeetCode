/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      stack.push(s[i]);
    } else if (stack.length === 0) {
      return false;
    } else {
      if (s[i] !== map[stack.pop()]) {
        return false;
      }
    }
  }
  return !stack.length
};

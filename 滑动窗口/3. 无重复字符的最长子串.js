/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let window = {},
    left = 0,
    right = 0,
    res = 0;
  while (right < s.length) {
    let a = s[right];
    right++;
    window[a] = (window[a] || 0) + 1;
    while (window[a] > 1) {
      let b = s[left];
      left++;
      window[b] -= 1;
    }
    res = Math.max(res, right - left);
  }
  return res;
};

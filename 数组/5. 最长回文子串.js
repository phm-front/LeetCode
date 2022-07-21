/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 在 s 中寻找以 s[l] 和 s[r] 为中心的最长回文串
  function palindrome(s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return s.substring(l + 1, r);
  }
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let a = palindrome(s, i, i);
    let b = palindrome(s, i, i + 1);
    if (a.length > b.length) {
      if (res.length < a.length) {
        res = a;
      }
    } else {
      if (res.length < b.length) {
        res = b;
      }
    }
  }
  return res;
};

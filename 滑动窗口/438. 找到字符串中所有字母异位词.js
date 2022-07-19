/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let indexArr = [],
    window = {},
    needs = {},
    nl = 0,
    left = (right = 0),
    valid = 0;
  for (let i of p) {
    if (i in needs) {
      needs[i] += 1;
    } else {
      nl++;
      needs[i] = 1;
    }
  }
  while (right < s.length) {
    let b = s[right];
    right++;
    if (b in needs) {
      window[b] = (window[b] || 0) + 1
      if (window[b] === needs[b]) {
        valid++;
      }
    }
    while (right - left >= p.length) {
      if (valid === nl) indexArr.push(left);
      let c = s[left];
      left++;
      if (c in needs) {
        if (window[c] === needs[c]) {
          valid--;
        }
        window[c] -= 1;
      }
    }
  }
  return indexArr;
};

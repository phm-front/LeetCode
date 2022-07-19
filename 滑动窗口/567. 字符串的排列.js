/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let window = {},
    needs = {},
    nl = 0;
  for (let i = 0; i < s1.length; i++) {
    let ele = s1[i];
    if (ele in needs) {
      needs[ele] += 1;
    } else {
      needs[ele] = 1;
      nl++;
    }
  }
  let left = (right = 0),
    valid = 0;
  while (right < s2.length) {
    let a = s2[right];
    right++;
    if (a in needs) {
      window[a] = (window[a] || 0) + 1
      if (needs[a] === window[a]) {
        valid++;
      }
    }
    while (right - left >= s1.length) {
      if (valid === nl) return true;
      let b = s2[left];
      left++;
      if (b in needs) {
        if (window[b] === needs[b]) {
          valid--;
        }
        window[b] -= 1;
      }
    }
  }
  return false;
};

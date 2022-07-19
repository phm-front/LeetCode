/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let window = new Map(),
    needs = new Map();
  for (let i = 0; i < t.length; i++) {
    let ele = t[i];
    if (needs.has(ele)) {
      needs.set(ele, needs.get(ele) + 1);
    } else {
      needs.set(ele, 1);
    }
  }
  let left = (right = 0);
  // 窗口中满足 need 条件的字符个数
  let valid = 0;
  // 记录最小覆盖子串的起始索引及长度
  let start = 0,
    len = Number.MAX_VALUE;
  while (right < s.length) {
    // 将移入窗口的元素
    let c = s[right];
    // 扩大窗口
    right++;
    // 进行窗口内数据的一系列更新
    if (needs.has(c)) {
      if (window.has(c)) {
        window.set(c, window.get(c) + 1);
      } else {
        window.set(c, 1);
      }
      if (window.get(c) === needs.get(c)) {
        valid++;
      }
    }
    while (valid === needs.size) {
      // 更新最小子串
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      // 将被移出窗口的元素
      let d = s[left];
      // 缩小窗口
      left++;
      // 进行窗口内数据的一系列更新
      if (needs.has(d)) {
        if (window.get(d) === needs.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }
  return len === Number.MAX_VALUE ? "" : s.slice(start, len + start);
};

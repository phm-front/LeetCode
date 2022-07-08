/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = []
  const paths = path.split('/')
  for (let i = 0; i < paths.length; i++) {
    const p = paths[i];
    if (p && p !== '.') {
      if (p === '..') {
        stack.pop()
      } else {
        stack.push(p)
      }
    }
  }
  return `/${stack.join('/')}`
};
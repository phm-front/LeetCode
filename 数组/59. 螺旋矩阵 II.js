/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let left_bound = 0,
    upper_bound = 0,
    right_bound = n - 1,
    lower_bound = n - 1;
  let res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = new Array(n);
  }
  let num = 1;
  while (num <= n * n) {
    if (upper_bound <= lower_bound) {
      for (let i = left_bound; i <= right_bound; i++) {
        res[upper_bound][i] = num++;
      }
      upper_bound++;
    }
    if (left_bound <= right_bound) {
      for (let i = upper_bound; i <= lower_bound; i++) {
        res[i][right_bound] = num++;
      }
      right_bound--;
    }
    if (upper_bound <= lower_bound) {
      for (let i = right_bound; i >= left_bound; i--) {
        res[lower_bound][i] = num++;
      }
      lower_bound--;
    }
    if (left_bound <= right_bound) {
      for (let i = lower_bound; i >= upper_bound; i--) {
        res[i][left_bound] = num++;
      }
      left_bound++;
    }
  }
  return res;
};

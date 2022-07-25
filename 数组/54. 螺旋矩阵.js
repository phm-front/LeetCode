/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  let left_bound = 0,
    upper_bound = 0,
    right_bound = n - 1,
    lower_bound = m - 1;
  let res = [];
  while (res.length < m * n) {
    if (upper_bound <= lower_bound) {
      for (let i = left_bound; i <= right_bound; i++) {
        res.push(matrix[upper_bound][i]);
      }
      upper_bound++;
    }
    if (left_bound <= right_bound) {
      for (let i = upper_bound; i <= lower_bound; i++) {
        res.push(matrix[i][right_bound]);
      }
      right_bound--;
    }
    if (upper_bound <= lower_bound) {
      for (let i = right_bound; i >= left_bound; i--) {
        res.push(matrix[lower_bound][i]);
      }
      lower_bound--;
    }
    if (left_bound <= right_bound) {
      for (let i = lower_bound; i >= upper_bound; i--) {
        res.push(matrix[i][left_bound]);
      }
      left_bound++;
    }
  }
  return res;
};

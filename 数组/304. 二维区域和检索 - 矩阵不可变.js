/**
 * @param {number[][]} matrix
 */
// 前缀和数组
var NumMatrix = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const myMatrix = []
  for (let i = 0; i < rows + 1; i++) {
    myMatrix.push(new Array(cols + 1).fill(0))
  }
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      myMatrix[i][j] =
        matrix[i - 1][j - 1] + myMatrix[i - 1][j] + myMatrix[i][j - 1] - myMatrix[i - 1][j - 1];
    }
  }
  this.myMatrix = myMatrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.myMatrix[row2 + 1][col2 + 1] -
    this.myMatrix[row2 + 1][col1] -
    this.myMatrix[row1][col2 + 1] +
    this.myMatrix[row1][col1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

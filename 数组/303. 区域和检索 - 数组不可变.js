/**
 * @param {number[]} nums
 */
// 前缀和 先算出前n项和
var NumArray = function (nums) {
  this.totalNums = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    this.totalNums[i + 1] = this.totalNums[i] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.totalNums[right + 1] - this.totalNums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

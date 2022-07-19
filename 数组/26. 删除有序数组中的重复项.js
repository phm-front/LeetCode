/**
 * @param {number[]} nums
 * @return {number}
 */
// 快慢指针
var removeDuplicates = function (nums) {
  if (nums.length === 1) return 1;
  let slow = 0,
    fast = 1;
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};

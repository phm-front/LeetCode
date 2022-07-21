/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function searchLeft(nums, target) {
  let left = 0, right = nums.length - 1
  while(left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
  if (left === nums.length) return -1
  return nums[left] === target ? left : -1
}
function searchRight(nums, target) {
  let left = 0, right = nums.length - 1
  while(left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      left = mid + 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
  if (left === 0) return -1
  return nums[left - 1] === target ? left - 1 : -1
}
var searchRange = function(nums, target) {
  return [searchLeft(nums, target), searchRight(nums, target)]
};

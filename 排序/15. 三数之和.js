/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 在无序的数组里，查找目标和大小相关，就可以看下是否可以利用排序降低复杂度
// 先排序 双指针
var threeSum = function(nums) {
  if (nums.length < 3) return []
  let list = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue // 去重
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        list.push([nums[i], nums[left], nums[right]])
        while (nums[left] === nums[left + 1]) { // 去重
          left++
        }
        left++
        while (nums[right] === nums[right - 1]) { // 去重
          right--
        }
        right--
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return list
};

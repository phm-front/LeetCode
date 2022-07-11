var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while(left <= right) {
      let mid = (left + right + 1) >> 1
      let val = nums[mid]
      if (val === target) {
          return mid
      } else if (val < target) {
          left = mid + 1
      } else {
          right = mid - 1
      }
  }
  return -1
};
console.log(search([4, 6, 3, 2, 10], 10))

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 归并排序 找到mid 分别排好 lo...mid 和 mid+1...hi 然后merge左右两个有序数组
var sortArray = function (nums) {
  let temp = new Array(nums.length);
  function merge(nums, lo, mid, hi) {
    for (let i = lo; i <= hi; i++) {
      temp[i] = nums[i];
    }
    // 双指针合并有序数组
    let i = lo,
      j = mid + 1;
    for (let p = lo; p <= hi; p++) {
      if (i === mid + 1) {
        nums[p] = temp[j++];
      } else if (j === hi + 1) {
        nums[p] = temp[i++];
      } else if (temp[i] > temp[j]) {
        nums[p] = temp[j++];
      } else {
        nums[p] = temp[i++];
      }
    }
  }
  // 排序gbSort
  function gbSort(nums, lo, hi) {
    if (lo === hi) return;
    const mid = Math.floor((hi + lo) / 2);
    gbSort(nums, lo, mid);
    gbSort(nums, mid + 1, hi);
    merge(nums, lo, mid, hi);
  }
  gbSort(nums, 0, nums.length - 1);
  console.log(temp)
  return nums;
};
console.log(sortArray([3, 1, 8, 4, 6]));

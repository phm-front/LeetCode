/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 归并排序 找到mid 分别排好 lo...mid 和 mid+1...hi 然后merge左右两个有序数组
var sortArray = function (nums) {
  function merge(arr1, arr2) {
    let i = 0,
      j = 0,
      res = [];
    while (i < arr1.length || j < arr2.length) {
      if (arr1.length === i) {
        res.push(arr2[j++]);
        continue;
      }
      if (arr2.length === j) {
        res.push(arr1[i++]);
        continue;
      }
      if (arr1[i] > arr2[j]) {
        res.push(arr2[j++]);
      } else if (arr1[i] < arr2[j]) {
        res.push(arr1[i++]);
      } else {
        res.push(arr2[j++]);
        res.push(arr1[i++]);
      }
    }
    return res;
  }
  function gbSort(nums, lo, hi) {
    if (lo === hi) return [nums[lo]];
    const mid = Math.floor((hi - lo) / 2) + lo;
    let leftArr = gbSort(nums, lo, mid);
    let rightArr = gbSort(nums, mid + 1, hi);
    return merge(leftArr, rightArr);
  }
  return gbSort(nums, 0, nums.length - 1);
};

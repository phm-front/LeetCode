/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 利用归并排序时merge的规律 在对 nuns[lo..hi] 合并的过程中，
// 每当执行 nums[p] = temp[i] 时，就可以确定 temp[i] 这个元素后面比它小的元素个数为 j - mid - 1。
var countSmaller = function (nums) {
  let arr = [];
  let count = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    arr[i] = { value: nums[i], id: i };
  }
  let temp = new Array(nums.length);
  function sortArray(nums) {
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
          count[nums[p].id] += j - mid - 1;
        } else if (temp[i].value > temp[j].value) {
          nums[p] = temp[j++];
        } else {
          nums[p] = temp[i++];
          count[nums[p].id] += j - mid - 1;
        }
      }
    }
    // 排序gbSort
    function gbSort(nums, lo, hi) {
      if (lo === hi) return;
      const mid = (hi + lo) >> 1;
      gbSort(nums, lo, mid);
      gbSort(nums, mid + 1, hi);
      merge(nums, lo, mid, hi);
    }
    gbSort(nums, 0, nums.length - 1);
  }
  sortArray(arr);
  return count;
};

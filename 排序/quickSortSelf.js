function quick(arr, start, end) {
  // 双指针
  let init = start
  let flag = arr[start];
  start++
  while (start < end) {
    while (arr[end] >= flag) {
      end--;
    }
    while (arr[start] <= flag) {
      start++;
    }
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
  [arr[start - 1], arr[init]] = [arr[init], arr[start - 1]]
  return start;
}
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let index = quick(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index, end);
  }
  return arr;
}
console.log(quickSort([3, 3, 2, 35, 235, 6, 34, 23]));

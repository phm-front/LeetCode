function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let leftArr = [];
  let rightArr = [];
  let flag = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i]
    if (num < flag) {
      leftArr.push(num);
    } else {
      rightArr.push(num);
    }
  }
  return quickSort(leftArr).concat([flag], quickSort(rightArr));
}
console.log(quickSort([3, 7, 3, 6, 4, 8]));

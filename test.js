function merge(arr1, arr2) {
  let i = 0, j = 0, res = []
  while(i < arr1.length || j < arr2.length) {
      if (arr1.length === i) {
          res.push(arr2[j++])
          continue
      }
      if (arr2.length === j) {
          res.push(arr1[i++])
          continue
      }
      if (arr1[i] > arr2[j]) {
          res.push(arr2[j++])
      } else if (arr1[i] < arr2[j]) {
          res.push(arr1[i++])
      } else {
          res.push(arr2[j++])
          res.push(arr1[i++])
      }
  }
  return res
}
console.log(merge([1, 5, 9], [2, 4, 7, 13]))
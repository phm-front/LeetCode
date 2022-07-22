// arr 为长度大于0的整数数组
class Difference {
  constructor(arr) {
    this.arr = arr
    this.difArr = new Array(arr.length)
    this.difArr[0] = arr[0]
    for (let i = 1; i < arr.length; i++) {
      this.difArr[i] = arr[i] - arr[i - 1]
    }
  }
  // 给区间[i, j] 增加 val
  increament(i, j, val) {
    this.difArr[i] += val
    if (j + 1 < this.difArr.length) {
      this.difArr[j + 1] -= val
    }
    return this.getResArr()
  }
  // 获取结果
  getResArr() {
    let res = new Array(this.arr.length)
    res[0] = this.difArr[0]
    for (let i = 1; i < this.difArr.length; i++) {
      res[i] = this.difArr[i] + res[i - 1]
    }
    return res
  }
}
let difObj = new Difference([1, 2, 3, 4, 5, 6])
console.log(difObj.increament(2, 5, 9))
console.log(difObj.increament(2, 4, -9))

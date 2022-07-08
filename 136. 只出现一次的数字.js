// 思路： 利用^异或运算符 两个相同的数字^运算为0
var singleNumber = function(nums) {
  let res = 0
  nums.forEach(num => {
      res ^= num
  })
  return res
};
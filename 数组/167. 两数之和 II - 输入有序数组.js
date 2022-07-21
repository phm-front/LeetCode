/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i1 = 0,
    i2 = numbers.length - 1;
  while (i1 < i2) {
    let sum = numbers[i1] + numbers[i2];
    if (sum === target) {
      return [i1 + 1, i2 + 1];
    } else if (sum < target) {
      i1++;
    } else if (sum > target) {
      i2--;
    }
  }
};

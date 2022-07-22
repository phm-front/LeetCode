/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  let difArr = new Array(n).fill(0);
  for (let i = 0; i < bookings.length; i++) {
    let [j, k, val] = bookings[i];
    difArr[j - 1] += val;
    if (k < difArr.length) {
      difArr[k] -= val;
    }
  }
  let res = new Array(n);
  res[0] = difArr[0];
  for (let i = 1; i < n; i++) {
    res[i] = difArr[i] + res[i - 1];
  }
  return res;
};

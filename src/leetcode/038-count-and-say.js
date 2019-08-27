/**
 * @desc 报数
 * @leetcode https://leetcode-cn.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let ret = '1'
  for (let i = 0; i < n - 1; i++) {
    let temp = ''
    for (let j = 0, k = 0; j < ret.length;) {
      if (ret[j] === ret[j + k]) {
        k++
      } else {
        temp = `${temp}${k}${ret[j]}`
        j += k
        k = 1
      }
    }
    ret = temp
  }
  return ret
}

// Test
console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))

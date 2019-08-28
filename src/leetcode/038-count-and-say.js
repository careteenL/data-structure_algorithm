/**
 * @desc 报数 方法一
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

/**
 * @desc 方法二 递归实现
 * @param {number} n
 * @return {string}
 */
var countAndSay2 = function (n) {
  if (n === 1) return '1'
  let pre = countAndSay2(n - 1)
  let temp = ''
  for (let i = 0, j = 0; i < pre.length;) {
    if (pre[i] === pre[i + j]) {
      j++
    } else {
      temp = temp + j + '' + pre[i]
      i += j
      j = 1
    }
  }
  return temp
}

// Test
console.log(countAndSay2(1))
console.log(countAndSay2(2))
console.log(countAndSay2(3))
console.log(countAndSay2(4))

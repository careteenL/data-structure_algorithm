/**
 * @desc 原地反转字符串数组
 * @leetcode https://leetcode-cn.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // return s.reverse() 原生
  var start = 0,
    end = s.length - 1
  while (start < end) {
    var temp = s[start]
    s[start] = s[end]
    s[end] = temp
    start++
    end--
  }
  return s
}

// Test
var a = ['h', 'e', 'l', 'l', 'o']
reverseString(a)
console.log(a)

var b = ['H', 'a', 'n', 'n', 'a', 'h']
reverseString(b)
console.log(b)

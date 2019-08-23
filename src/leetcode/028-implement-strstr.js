/**
 * @desc 实现strStr()函数。
 *      给定一个haystack字符串和一个needle字符串，在haystack字符串中找出needle字符串出现的第一个位置 (从0开始)。如果不存在，则返回-1。
 * @leetcode https://leetcode-cn.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 方法一
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle)
}
// Test
console.log(strStr('hello', 'll'))
console.log(strStr('aaaaa', 'bba'))

// 方法二
var strStr2 = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substr(i, needle.length) === needle) {
        return i
      }
    }
  }
  return -1
}
// Test
console.log(strStr2('hello', 'll'))
console.log(strStr2('aaaaa', 'bba'))

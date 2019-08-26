/**
 * @desc 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * @leetcode https://leetcode-cn.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var array = s.trim().split(' ')
  return array[array.length - 1].length
}

// Test
console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('Hello World '))

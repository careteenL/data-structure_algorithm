/**
 * @desc 给定一个字符串，逐个翻转字符串中的每个单词
 * @leetcode https://leetcode-cn.com/problems/reverse-words-in-a-string/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.replace(/\s+/g, ' ').replace(/\s$/, '').replace(/^\s/, '').split(' ').reverse().join(' ')
}

// Test
console.log(reverseWords('the sky is blue'))
console.log(reverseWords('  hello world!  '))
console.log(reverseWords('a good   example'))

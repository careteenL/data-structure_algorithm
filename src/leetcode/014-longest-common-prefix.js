/**
 * @desc 最长公共前缀
 *      编写一个函数来查找字符串数组中的最长公共前缀。
 *      如果不存在公共前缀，返回空字符串 ""。
 * @leetcode https://leetcode-cn.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let ret = ''
  if (!strs.length) {
    return ret
  }
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return ret
      }
    }
    ret += strs[0][i]
  }
  return ret
}

// Test
console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['sflower', 'flow', 'aflight']))
console.log(longestCommonPrefix(['flower', 'flower', 'flower']))

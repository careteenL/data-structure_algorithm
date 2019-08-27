/**
 * @desc 给定一种规律pattern和一个字符串str，判断str是否遵循相同的规律。
 * 这里的遵循指完全匹配，例如，pattern里的每个字母和字符串str中的每个非空单词之间存在着双向连接的对应规律。
 * @leetcode https://leetcode-cn.com/problems/word-pattern/
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  var strTmp = str.split(' ')
  if (pattern.length !== strTmp.length) {
    return false
  }
  var map = {}
  for (var i = 0; i < pattern.length; i++) {
    if (map[pattern[i]]) {
      if (map[pattern[i]] !== strTmp[i]) {
        return false
      }
    } else {
      if (Object.keys(map).length > 0 && Object.values(map).indexOf(strTmp[i]) > -1) {
        return false
      } else {
        map[pattern[i]] = strTmp[i]
      }
    }
  }
  return true
}

// Test
console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog cat cat fish'))
console.log(wordPattern('aaaa', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog dog dog dog'))

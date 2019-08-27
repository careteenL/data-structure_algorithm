/**
 * @desc 方法一
 * 给定两个字符串s和t，判断它们是否是同构的。
 * 如果s中的字符可以被替换得到t，那么这两个字符串是同构的。
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 * @leetcode https://leetcode-cn.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  var map = {}
  for (var i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      if (Object.keys(map).length > 0 && Object.values(map).indexOf(t[i]) > -1) {
        return false
      } else {
        map[s[i]] = t[i]
      }
    } else if (map[s[i]] !== t[i]) {
      return false
    }
  }
  return true
}

// Test
console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))

/**
 * @desc 方法二
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic2 = function (s, t) {
  for (var i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false
    }
  }
  return true
}

// Test
console.log(isIsomorphic2('egg', 'add'))
console.log(isIsomorphic2('foo', 'bar'))
console.log(isIsomorphic2('paper', 'title'))

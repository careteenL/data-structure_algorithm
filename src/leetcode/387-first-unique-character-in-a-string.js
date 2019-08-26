/**
 * @desc 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * @leetcode https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (var i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }
  return -1
}

// Test
console.log(firstUniqChar('leetcode'))
console.log(firstUniqChar('loveleetcode'))
console.log(firstUniqChar('cc'))

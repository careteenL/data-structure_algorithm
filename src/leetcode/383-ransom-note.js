/**
 * @desc 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。
 * 如果可以构成，返回 true ；否则返回 false。
 * @leetcode https://leetcode-cn.com/problems/ransom-note/
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  var current_magazine
  for (var i = 0; i < ransomNote.length; i++) {
    current_magazine = magazine.replace(ransomNote[i], '')
    if (current_magazine.length === magazine.length) {
      return false
    }
    magazine = current_magazine
  }
  return true
}

// Test
console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))

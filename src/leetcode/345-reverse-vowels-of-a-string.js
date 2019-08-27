/**
 * @desc 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 *        需要区分大小写
 * @leetcode https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split('')
  // var vowels = ['a', 'e', 'i', 'o', 'u']
  var vowels = 'aeiou'
  var start = 0,
    end = s.length - 1
  while (start < end) {
    if (vowels.indexOf(s[start].toLowerCase()) > -1) {
      if (vowels.indexOf(s[end].toLowerCase()) > -1) {
        var temp = s[start]
        s[start] = s[end]
        s[end] = temp
        start++
        end--
      } else {
        end--
      }
    } else {
      start++
    }
  }
  return s.join('')
}

// Test
console.log(reverseVowels('hello'))
console.log(reverseVowels('leetcode'))
console.log(reverseVowels('Aa'))

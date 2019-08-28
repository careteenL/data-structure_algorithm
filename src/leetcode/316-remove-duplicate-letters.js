/**
 * @desc 给定一个仅包含小写字母的字符串，去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
 * @leetcode https://leetcode-cn.com/problems/remove-duplicate-letters/
 * @think 利用栈和贪心算法的思想
 *        1. 维护一个栈stack，对字符串进行正序遍历
 *        2. 对每个字符char，首先判断stack中是否存在，
 *          2.1 若stack栈顶值比char大且后续还存在此值，则将栈顶弹出；
 *            2.1.1 使用indexOf(xx, i)取代 lastIndexOf(xx)减少遍历次数会更快
 *        3. 入栈每个char
 *        4. 打印栈底到栈顶即为结果
 * @time O(nlogn) 
 * @space 0(1) 只需借用一个栈
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  var stack = []
  for (var i = 0; i < s.length; i++) {
    var char = s[i]
    if (stack.indexOf(char) > -1) continue
    // 使用indexOf(xx, i)取代 lastIndexOf(xx)减少遍历次数会更快
    while (stack.length > 0 && stack[stack.length - 1] > char && s.indexOf(stack[stack.length - 1], i) > i) {
      stack.pop()
    }
    stack.push(char)
  }
  return stack.join('')
}

// Test
console.log(removeDuplicateLetters('bcabc'))
console.log(removeDuplicateLetters('cbacdcbc'))

/**
 * @desc 3. 无重复字符的最长子串
 * @leetcode https://leetcode.cn/problems/longest-substring-without-repeating-characters
 * @think
 * 判断无重复可以用 Set
 * 不定长滑动窗口 两个指针 一左一右往后移动
 */
function lengthOfLongestSubstring(s) {
  let memo = new Set();
  const len = s.length;
  let rightKey = -1;
  let answer = 0;
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      memo.delete(s.charAt(i - 1));
    }
    while (rightKey + 1 < len && !memo.has(s.charAt(rightKey + 1))) {
      memo.add(s.charAt(rightKey + 1));
      rightKey++;
    }
    answer = Math.max(answer, rightKey - i + 1);
  }
  return answer;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));

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

// 重新再写一遍
// 找到一个字符串中最长的不重复子串的长度
function lengthOfLongestSubstringNew(s) {
  const set = new Set();
  const len = s.length;
  let rightKey = -1;
  let result = 0;
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      set.delete(s[i - 1]);
    }
    while (rightKey + 1 < len && !set.has(s[rightKey + 1])) {
      set.add(s[rightKey + 1]);
      rightKey++;
    }
    result = Math.max(result, rightKey - i + 1);
  }
  return result;
}

console.log(lengthOfLongestSubstringNew("abcabcbb")); // abc
console.log(lengthOfLongestSubstringNew("bbbbb"));
console.log(lengthOfLongestSubstringNew("pwwkew"));

function lengthOfLongestSubstringNew1(s) {
  let result = 0;
  const len = s.length;
  const set = new Set();
  let left = 0;
  for (let right = 0; right < len; right++) {
    const value = s[right];
    while (set.has(value)) {
      set.delete(s[left++]);
    }
    set.add(value);
    console.log("set: ", set);
    result = Math.max(result, right - left + 1);
  }
  return result;
}

console.log(lengthOfLongestSubstringNew1("abcbacbb"));
console.log(lengthOfLongestSubstringNew1("bbbbb"));
console.log(lengthOfLongestSubstringNew1("pwwkew"));

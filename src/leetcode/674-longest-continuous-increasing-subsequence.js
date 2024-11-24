/**
 * @desc 674. 最长连续递增序列
 * @leetcode https://leetcode.cn/problems/longest-continuous-increasing-subsequence/description/
 *
 */
var findLengthOfLCIS = function (nums) {
  let left = 0;
  let len = 1;
  let right = left + 1;
  while (left < nums.length) {
    if (nums[right] > nums[right - 1]) {
      len = Math.max(len, right - left + 1);
      right++;
    } else {
      left = right;
      right++;
    }
  }
  return len;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
console.log(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]));

/**
 * @desc 1708-长度为 K 的最大子数组
 * @leetcode https://leetcode.cn/problems/largest-subarray-length-k/description/
 * @think
 * 定长滑动窗口
 * 1. 先计算前 k 项的和，作为 max
 * 2. 开始滑动窗口，删除前一项，增加后一项，计算其 sum，和 max 比值
 * 3. 返回 max
 */
function largestSubArrayLengthK(arr, k) {
  let max = 0;
  for (var i = 0; i < k; i++) {
    max += arr[i];
  }
  let winMax = max;
  for (let i = k; i < arr.length; i++) {
    winMax = winMax + arr[i] - arr[i - k];
    max = Math.max(winMax, max);
  }
  return max;
}

// Test
const arr = [1, 3, 10, -2, 9, 8, -4];
console.log(largestSubArrayLengthK(arr, 3));

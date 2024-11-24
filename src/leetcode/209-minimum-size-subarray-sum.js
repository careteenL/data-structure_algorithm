/**
 * @dedc 209. 长度最小的子数组
 * @leetcode https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 * @param {*} target
 * @param {*} nums
 * @returns
 * @knowledge 不定长的滑动窗口
 */

// ❌ 错误的
var minSubArrayLen1 = function (target, nums) {
  const len = nums.length;
  let result = len;
  const sumArr = [];
  function getSum(arr) {
    return arr.reduce((memo, curr) => memo + curr, 0);
  }
  let left = 0;
  for (let right = 0; right < len; right++) {
    while (getSum(sumArr) >= target) {
      sumArr.shift();
      left++;
    }
    sumArr.push(nums[right]);
    console.log(sumArr.length, "---");
    result = Math.min(result, sumArr.length);
  }
  return result;
};

// ✅ 正确方案
var minSubArrayLen1 = function (target, nums) {
  let sum = 0;
  let answer = nums.length + 1;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    sum = sum + nums[right];
    while (sum >= target) {
      answer = Math.min(answer, right - left + 1);
      sum = sum - nums[left];
      left = left + 1;
    }
  }
  return answer <= nums.length ? answer : 0;
};

console.log(minSubArrayLen1(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen1(4, [1, 4, 4]));
console.log(minSubArrayLen1(11, [1, 1, 1, 1, 1, 1, 1, 1]));

/**
 * @desc 713. 乘积小于 K 的子数组
 * @leetcode https://leetcode.cn/problems/subarray-product-less-than-k/description/
 * @param {*} nums
 * @param {*} k
 * @returns
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }
  let answer = 0;
  let prod = 1;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    prod *= nums[right];
    while (prod >= k) {
      prod /= nums[left];
      left++;
    }
    answer = answer + right - left + 1;
  }
  return answer;
};

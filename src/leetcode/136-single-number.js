/**
 * @desc 136. 只出现一次的数字
 * @leetcode https://leetcode.cn/problems/single-number/
 * @param {*} nums
 */
var singleNumberError = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    if (map.has(ele)) {
      map.set(ele, map.get(ele) + 1);
    } else {
      map.set(ele, 1);
    }
  }
  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
  return -1;
};

console.log(singleNumberError([2, 2, 1, 9, 1]));

// 异或操作实现
//  1 ^ 1 = 0
var singleNumber = function (nums) {
  let answer = 0;
  for (let i of nums) {
    answer ^= i;
  }
  return answer;
};

console.log(singleNumber([2, 2, 1, 9, 1]));

function testForOf(arr) {
  for (let key in arr) {
    console.log("key: ", key);
  }
}

testForOf([1, 2, 3]);

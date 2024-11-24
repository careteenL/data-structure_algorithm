/**
 * @desc 56. 合并区间
 * @leetcode https://leetcode.cn/problems/merge-intervals/description/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let answer = [];
  for (let value of intervals) {
    const last = answer.length - 1;
    // 可以合并的条件
    if (answer.length && value[0] <= answer[last][1]) {
      answer[last][1] = Math.max(answer[last][1], value[1]);
    } else {
      answer.push(value);
    }
  }
  return answer;
};

// 先根据每一项左区间做排序
// 遍历
// [[1,3]]
console.log(
  merge([
    [15, 18],
    [1, 3],
    [8, 10],
    [2, 6],
  ])
);

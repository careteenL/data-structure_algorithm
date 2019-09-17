/**
 * @desc 爬楼梯 假设你正在爬楼梯。需要n阶你才能到达楼顶。每次你可以爬1或2个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * @leetcode https://leetcode-cn.com/problems/climbing-stairs/
 * @think 方法一：斐波那契数列的递归解法
 * @optimization 尾递归优化见 https://github.com/careteenL/data-structure_algorithm/blob/0816-leetcode/src/algorithm/recursion/fibonacci.md
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1
  if (n === 2) return 2
  return climbStairs(n - 1) + climbStairs(n - 2)
}
// Test
console.log(climbStairs(5))
console.log(climbStairs(6))

/**
 * @think 方法二：动态规划
 * 不难发现，这个问题可以被分解为一些包含最优子结构的子问题，即它的最优解可以从其子问题的最优解来有效地构建，我们可以使用动态规划来解决这一问题。
 * 1. 第ii阶可以由以下两种方法得到：
 *  1.1 在第(i-1)(i−1)阶后向上爬一阶。
 *  1.2 在第(i-2)(i−2)阶后向上爬 22 阶。
 * 2. 所以到达第ii阶的方法总数就是到第(i-1)(i−1)阶和第(i-2)(i−2)阶的方法数之和。
 *  令 dp[i]dp[i] 表示能到达第ii阶的方法总数：
 *    dp[i]=dp[i−1]+dp[i−2]
 * @param {*} n
 */ 
var climbStairs2 = function(n) {
  let memo = []
  memo[0] = 0
  memo[1] = 1
  memo[2] = 2
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }
  return memo[n]
}
// Test
console.log(climbStairs2(5))
console.log(climbStairs2(6))

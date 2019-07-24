/**
 * @desc 重复子问题优化
 */

/**
 * @desc 斐波那契数列 - 基础版
 * @time O(2^n)
 * @param {Number} n 
 */
export function fib (n) {
  return n <= 1 ? 1 : fib(n - 1) + fib(n - 2)
}
// Test
console.log(fib(3))
console.log(fib(200)) // 等很久

/**
 * @desc 斐波那契数列 - 动态规划优化版
 * @time O(n)
 * @param {Number} n 
 */
export function fibDynamic (n) {
  let pre = 1, cur = 1
  for (let i = 2; i < n; i++) {
    [cur, pre] = [cur + pre, cur]
  }
  return cur
}
// Test
console.log(fibDynamic(3))
console.log(fibDynamic(200))

/**
 * @desc 上台阶 - 基础版
 * @time >O(2^n)
 * @param {Number} n 
 */
export function steps (n) {
  if (n === 0) {
    return 1
  }
  return [...Array(n)].map((_, i) => i)
    .reduce((sum, cur) => {
      return sum + steps(cur)
    }, 0)
}
// Test
console.log(steps(3))
console.log(steps(20))

/**
 * @desc 上台阶 - 动态规划优化版
 * @time O(n)
 * @param {Number} n 
 */
export function stepsDynamic (n) {
  const sum = [1, 1]
  for (let i = 2; i < n; i++) {
    sum[i] = sum.reduce((a, b) => a + b)
  }
  return sum.pop()
}
// Test
console.log(stepsDynamic(3))
console.log(stepsDynamic(20))

/**
 * @desc 上台阶 - 究极快
 * @param {Number} n 
 */
export function stepsFastest (n) {
  return 1 << (n - 1)
}
// Test
console.log(stepsFastest(3))
console.log(stepsFastest(20))

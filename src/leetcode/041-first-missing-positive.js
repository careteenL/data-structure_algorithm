/**
 * @desc 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
 * @leetcode https://leetcode-cn.com/problems/first-missing-positive/
 * @think 
 *  1. 判断是否出现过1，如果没有则返回1
 *  2. 如果数组长度为1，则返回2
 *  3. 将数组中所有负数、0、大于n的数置为1
 *  4. 遍历数组。当读取数字a时，替换第a个元素的符号
 *     注意重复元素：只能改变一次符号。由于没有下标n，使用下标0的元素保存是否存在数字len
 *  5. 再次遍历数组。返回第一个正数元素的下标
 *  6. 如果nums[0] > 0，则返回len
 *  7. 如果之前的步骤中没有发现nums中有正整数，则返回n+1
 * @time O(n) 因为所有操作中一共遍历了四次
 * @space O(1) 因为只是原地修改
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let len = nums.length
  let contains = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) {
      contains++
      break
    }
  }

  // 1. 没有出现过1，直接返回1
  if (contains === 0) return 1

  // 2. 出现过1且数组长度为1，返回2
  if (len === 1) return 2

  // 3. 将数组中所有负数、0、大于n的数置为1
  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0 || nums[i] > len) {
      nums[i] = 1
    }
  }

  // 4. 遍历数组。当读取数字a时，替换第a个元素的符号
  for (let i = 0; i < len; i++) {
    let element = Math.abs(nums[i]) // 只能改变一次符号
    if (element === len) { // 使用下标0的元素保存是否存在数字len
      nums[0] = -Math.abs(nums[0])
    } else {
      nums[element] = -Math.abs(nums[element])
    }
  }

  // 5. 再次遍历数组。返回第一个正数元素的下标
  for (let i = 1; i < len; i++) {
    if (nums[i] > 0) return i
  }

  // 6. 如果nums[0] > 0，则返回len
  if (nums[0] > 0) return len

  // 7. 如果之前的步骤中没有发现nums中有正整数，则返回len+1
  return len + 1
}

// Test
console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([7, 8, 9, 11, 12]))

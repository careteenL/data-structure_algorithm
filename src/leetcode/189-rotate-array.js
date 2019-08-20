/**
 * @desc 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * @leetcode https://leetcode-cn.com/problems/rotate-array/
 */

/**
 * @think 方法一：使用反转
 *        当我们旋转数组k次，k%n个尾部元素会被移动到头部，剩下的元素会被向后移动
 *        在这个方法中，我们首先将所有元素反转。然后反转前k个元素，再反转后面n-k个元素，就能解决。
 *        假设 n=7且 k=3
 *        原始数组：        1 2 3 4 5 6 7
 *        反转所有数字后：   7 6 5 4 3 2 1
 *        反转前k个数字后：  5 6 7 4 3 2 1
 *        反转后n-k个数字后：5 6 7 1 2 3 4
 * @time n个元素被反转了3次 故为O(n)
 * @space 原地修改数组 故为O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k %= nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
  return nums // TODO remove
}

// 从start到end反转一个数组
var reverse = function (nums, start, end) {
  while (start < end) {
    let temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}

// Test
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate([-1, -100, 3, 99], 2))

/**
 * @think 方法二： 暴力求解
 *        每次将数组旋转1个元素
 * @time 每个元素都被移动1步 故为O(kn)
 * @space 没有额外空间被使用 故为O(1)
 * @param {number[]} nums
 * @param {number} k
 */
var rotate2 = function (nums, k) {
  k %= nums.length
  let temp, previous
  for (let i = 0; i < k; i++) {
    previous = nums[nums.length - 1]
    for (let j = 0; j < nums.length; j++) { // 旋转一次
      temp = nums[j]
      nums[j] = previous
      previous = temp
    }
  }
  return nums
}

// Test
console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate2([-1, -100, 3, 99], 2))

/**
 * @think 方法三： 使用额外的数组
 *        使用额外的数组存放正确的元素
 * @time 将数组放入新数组中需要遍历一次，还需要将新数组拷贝给原数组一次遍历，即总共需要两次遍历 故为O(kn)
 * @space 需要一个长度和原数组一样的新数组 故为O(n)
 * @param {number[]} nums
 * @param {number} k
 */
var rotate3 = function (nums, k) {
  k %= nums.length
  let len = nums.length
  let temp = new Array(len)
  for (let i = 0; i < len; i++) {
    temp[(i + k) % len] = nums[i]
  }
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i]
  }
  return nums
}

// Test
console.log(rotate3([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate3([-1, -100, 3, 99], 2))

/**
 * @think 方法四： 拼接
 *        使用slice将数组截为两部分 再做拼接
 * @time 截取数组再拼接数组 故为O(n)
 * @space slice两次返回大小为k和n-k的数组，concat拼接后返回n长度数组，故需要占用空间2n 故为O(n)
 * @param {number[]} nums
 * @param {number} k
 */
var rotate4 = function (nums, k) {
  k %= nums.length
  nums = nums.slice(nums.length - k, nums.length).concat(nums.slice(0, nums.length - k))
  return nums
}

// Test
console.log(rotate4([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate4([-1, -100, 3, 99], 2))

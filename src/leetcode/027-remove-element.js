/**
 * @desc 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
         不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
         元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * @leetcode https://leetcode-cn.com/problems/remove-element/
 * @think 因为要原地修改，所以使用`splice`方法对原数组进行截断
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
      len--
    }
  }
  return len
}

// Test
console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))

/**
 * @desc 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
         不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * @leetcode https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @desc 因为已经是排序了，只需判断挨着两项是否相等，如果相等就给干掉
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let len = nums.length
  for (let i = 1; i < len; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1)
      i--
      len--
    }
  }
  return len
}

// Test 
console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

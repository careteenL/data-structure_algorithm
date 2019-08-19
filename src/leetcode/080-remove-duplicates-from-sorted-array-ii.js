/**
 * @desc 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
         不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * @leetcode https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/submissions/
 * @think 因为是原地修改，且每个元素最多可重复两次，
        故维持一个指针p，遍历原数组时以p为准修改数组，
        当原数组i和已改变数组p-2项值相等时，干掉这一项。
        可得出通用解法，若要满足元素最多可重复n次，将下列`2`的地方换成n即可。
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let p = 0,
    len = nums.length
  for (let i = 0; i < len; i++) {
    if (p < 2 || nums[i] !== nums[p - 2]) {
      nums[p++] = nums[i]
    }
  }
  return p
}

// Test
console.log(removeDuplicates([1,1,1,2,2,3]))
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))

/**
 * @desc 88. 合并两个有序数组
 * @leetcode https://leetcode.cn/problems/merge-sorted-array
 * @think
 * 逆向双指针
 * 时间复杂度O(m+n)
 * 空间复杂度O(1)
 */
function merge(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  let current;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 < 0) {
      current = nums2[p2--];
    } else if (p2 < 0) {
      current = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      current = nums1[p1--];
    } else {
      current = nums2[p2--];
    }
    nums1[p--] = current;
  }
  return nums1;
}

// Test
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));

// 再手写一次
function mergeNew(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p--;
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p--;
      p2--;
    }
  }
  return nums1;
}

console.log(mergeNew([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3));
console.log(mergeNew([0], 0, [1], 1));

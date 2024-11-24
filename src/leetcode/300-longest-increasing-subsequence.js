/**
 * @desc 300. 最长递增子序列
 * @leetcode https://leetcode.cn/problems/longest-increasing-subsequence
 */

// 2 3 1 4 6 5 8 7 9
// 1 3 5 7 8 9
// 1 4 5 7 9
// 2 3 4 5 7 9
function lengthOfLISNew(nums) {
  let n = nums.length;
  if (n <= 1) {
    return n;
  }
  let tail = [nums[0]]; //存放最长上升子序列数组
  for (let i = 0; i < n; i++) {
    if (nums[i] > tail[tail.length - 1]) {
      //当nums中的元素比tail中的最后一个大时 可以放心push进tail
      tail.push(nums[i]);
    } else {
      //否则进行二分查找
      let left = 0;
      let right = tail.length - 1;
      while (left < right) {
        let mid = (left + right) >> 1;
        if (tail[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      tail[left] = nums[i]; //将nums[i]放置到合适的位置，此时前面的元素都比nums[i]小
    }
    console.log(tail);
  }
  return tail.length;
}

function lengthOfLIS(arr) {
  const result = [0]; // 存放子序列的索引
  const len = arr.length;
  let start,
    end,
    middle = 0;
  for (let i = 0; i < len; i++) {
    const item = arr[i];
    const resultLastIndex = result[result.length - 1];
    if (item > arr[resultLastIndex]) {
      result.push(i);
      continue;
    }
    // 如果严格递增，则需要过滤重复的数字
    if (result.map((item) => arr[item]).includes(item)) {
      continue;
    }
    start = 0;
    end = result.length - 1;
    // 二分查找并替换
    while (start < end) {
      middle = ((start + end) / 2) | 0;
      if (item < arr[result[middle]]) {
        end = middle;
      } else {
        start = middle + 1;
      }
    }
    result[start] = i;
    console.log(result);
  }
  return result.length;
}
// Test
console.log(lengthOfLIS([2, 3, 1, 4, 6, 5, 8, 7, 9]));
console.log(lengthOfLIS([2, 3, 1, 5, 6, 8, 7, 9, 4]));
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]));

/**
 * @desc vue 中 diff 算法的优化策略
 *       需要拿到最长递增子序列的下标，对这部分下标元素不做改动，其他下标元素插入到后一个的前面即可
 */
function getSeq(arr) {
  const result = [0]; // 存放子序列的索引
  const len = arr.length;
  let resultLastIndex,
    start,
    end,
    middle = 0,
    p = arr.slice(0).fill(-1); // 保存每一个元素的前一个元素索引
  for (let i = 0; i < len; i++) {
    const item = arr[i];
    resultLastIndex = result[result.length - 1];
    if (item > arr[resultLastIndex]) {
      p[i] = resultLastIndex; // 放置 result 最后一个元素，然后再 push，即表示上一个元素索引
      result.push(i);
      continue;
    }

    // 如果严格递增，则需要过滤重复的数字
    // if (result.map((item) => arr[item]).includes(item)) {
    //   continue;
    // }
    start = 0;
    end = result.length - 1;
    // 二分查找并替换
    while (start < end) {
      middle = ((start + end) / 2) | 0;
      if (item < arr[result[middle]]) {
        end = middle;
      } else {
        start = middle + 1;
      }
    }
    p[i] = result[start - 1]; // 目标元素的前一个索引
    if (item < arr[result[start]]) {
      // 当前这个小就替换 小的更有潜力
      result[start] = i;
    }
  }
  // 修正 result 的结果
  let i = result.length;
  let last = result[i - 1];
  while (i-- > 0) {
    result[i] = last; // 最后一项一定是正确的
    last = p[last];
  }
  return result;
}

// Test
// 2, 3, 1, 5, 6, 8, 7, 9, 4
// 2
// 2, 3
// 1, 3
// 1, 3, 5
// 1, 3, 5, 6
// 1, 3, 5, 6, 8
// 1, 3, 5, 6, 7
// 1, 3, 5, 6, 7, 9
// 1, 3, 4, 6, 7, 9 => 对应索引[ 2, 1, 8, 4, 6, 7 ]

// p
// undefined, 0, undefined, 1, 3, 4, 4, 6, 1
console.log(getSeq([2, 3, 1, 5, 6, 8, 7, 9, 4])); // [2,3,5,6,7,9] => 对应的下标[0,1,3,4,6,7]
console.log(getSeq([4, 10, 4, 3, 8, 9]));

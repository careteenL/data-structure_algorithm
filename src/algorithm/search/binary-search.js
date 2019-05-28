/**
 * @desc 二分查找
 * 1、已排序数组arr
 * 2、取到左右边界 l = 0, r = arr.length -1
 * 3、取到猜想值 guess = Math.floor((l + r) / 2)
 * 4、将猜想值guess和目标值val相比
 *    4.1 如果 arr[guess] > val 则新左边界 r = guess - 1
 *    4.2 如果 arr[guess] < val 则新右边界 l = guess + 1
 *    4.3 如果 arr[guess] = val 则返回 guess
 * 5、回到第三步循环直到 l > r 结束循环
 * 6、若上面循环没有返回值即没找到目标值的下标 则返回 -1
 */ 
export function binarySearch (arr, val) {
  let l = 0, // 左边界
    r = arr.length - 1, // 右边界
    guess // 猜想目标值所在下标
  while (l <= r) {
    guess = Math.floor((l + r) / 2)
    if (arr[guess] === val) {
      return guess
    } else if (arr[guess] > val) {
      r = guess - 1 // 新左边界
    } else {
      l = guess + 1 // 新右边界
    }
  }
  return -1
}

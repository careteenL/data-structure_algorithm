import { swap } from '../../util'
/**
 * @desc 快速排序 - 返回新数组
 * @time O(nlogn)
 * @param {Array} array 
 * @return {Array}
 */ 
export function quickSort(array) {
  // const { length } = array
  if (array.length <= 1) return array
  // let pivotIndex = Math.floor(length / 2)
  // 运算符更快
  let pivotIndex = array.length >> 1
  let pivot = array.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }    
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
// Test
const quickPreArr = [20, 45, 78, 22, 49, 25, 66, 3, 71, 5, 33]
console.log(quickSort(quickPreArr))

/**
 * @desc 快速排序 - 更改原数组
 * @time O(nlogn)
 * @param {Array} array 
 * @return {Array}
 */ 
export function quickSortPure(array, lo = 0, hi = array.length) {
  if (hi - lo <= 1) return
  const pivot = partition(array, lo, hi)
  quickSortPure(array, lo, pivot)
  quickSortPure(array, pivot + 1, hi)
}

// 找到下一个中心点的位置
function partition(array, lo, hi) {
  const pivot = array[hi - 1] // 取数组最后一个元素作为中心点
  let i = lo, j = hi - 1
  while (i !== j) {
    array[i] - pivot <= 0 ?
      i++ :
      swap(array, i, --j)
  }
  swap(array, j, hi - 1)
  return j
}
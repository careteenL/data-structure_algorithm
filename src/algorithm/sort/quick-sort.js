/**
 * @desc 快速排序
 *       时间复杂度为O(nlogn)
 * @param {Array} array 
 * @return {Array}
 */ 
// import { swap } from '../../util'

export function quickSort(array) {
  const { length } = array
  if (length <= 1) return array
  // let pivotIndex = Math.floor(length / 2)
  // 运算符更快
  let pivotIndex = length >> 1
  let pivot = array.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < length; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }    
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
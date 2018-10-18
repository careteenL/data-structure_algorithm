/**
 * @desc 归并排序
 *       时间复杂度为O(nlogn)
 * @param {Array} array 
 * @return {Array}
 */ 
// import { swap } from '../../util'

function merge (left, right) {
  let i = 0
  let j = 0
  const result = []
  // 对左右子数组依项比较，小的先加入数组
  while (i < left.length && j < right.length) {
    result.push(
      left[i] < right[j] ? 
        left[i++] :
        right[j++]
    )
  }
  // 将剩余项归并到数组中
  return result.concat(
    i < left.length ?
      left.slice(i) :
      right.slice(j)
  )
}

export function mergeSort(array) {
  if (array.length > 1) {
    const { length } = array
    const middle = Math.floor(length / 2)
    // 递归拆分成长度为1的数组
    const left = mergeSort(array.slice(0, middle))
    const right = mergeSort(array.slice(middle, length))
    // 对小数组进行归并
    array = merge(left, right)
  }
  return array
}
/**
 * @desc 计数排序
 * @param {Array} array 
 * @return {Array}
 */ 
// import { swap } from '../../util'

export function countingSort(array) {
  if (array.length < 2) return array
  const max = Math.max.apply(null, array) // 找到数组最大值
  let sortedIndex = 0
  const counts = new Array(max + 1) // 构建一个以最大值为长度的数组
  array.forEach(element => {
    // 新数组的`每项值`为原数组中出现`当前下标值`的次数
    if (!counts[element]) {
      counts[element] = 0
    }
    counts[element]++
  })
  // 新数组可能存在多项值为undefined
  counts.forEach((element, index) => {
    // 从小到大输出并重新赋值给原数组，即为已排序好的
    while (element > 0) {
      array[sortedIndex++] = index
      element--
    }
  })
  return array
}
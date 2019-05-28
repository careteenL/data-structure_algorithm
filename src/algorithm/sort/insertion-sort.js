/**
 * @desc 插入排序
 *       时间复杂度为O(n2)
 * @param {Array} array 
 * @return {Array}
 */ 
// import { swap } from '../../util'

export function insertionSort(array) {
  const { length } = array
  let temp
  // 默认第一项为已排序
  for (let i = 1; i < length; i++) {
    // temp 暂存当前循环第一项的值
    let j = i
    temp = array[i]
    // j>0且前一项比当前项大 则将前一项值赋值给当前项并j--往前继续比较
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1]
      j--
    }
    // 否则将当前循环第一项的值插入到相应位置
    array[j] = temp
  }
  return array
}

// todo: 使用二分查找优化插入排序 `while (j > 0 && array[j - 1] > temp) {`

/**
 * @desc 冒泡排序 - 改进后
 *       时间复杂度为O(n2)
 * @param {Array} array 
 * @return {Array}
 */ 
import { swap } from '../../util'

export function bubbleSortImproved(array) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    // 减少循环比较次数
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }      
    }    
  }
  return array
}
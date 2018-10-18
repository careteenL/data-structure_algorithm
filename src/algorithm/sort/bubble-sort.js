/**
 * @desc 冒泡排序
 *       时间复杂度为O(n2)
 * @param {Array} array 
 * @return {Array}
 */ 
import { swap } from '../../util'

export function bubbleSort(array) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }      
    }    
  }
  return array
}
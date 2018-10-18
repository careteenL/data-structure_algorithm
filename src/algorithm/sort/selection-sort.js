/**
 * @desc 选择排序
 *       时间复杂度为O(n2)
 * @param {Array} array 
 * @return {Array}
 */ 
import { swap } from '../../util'

export function selectionSort (array) {
  const { length } = array
  let indexMin
  for (let i = 0; i < length; i++) {
    // 每轮循环把当前第一项作为最小值
    indexMin = i
    for (let j = i; j < length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j
      }      
    }
    if (i !== indexMin) {
      swap(array, i, indexMin)
    }
  }
  return array
}
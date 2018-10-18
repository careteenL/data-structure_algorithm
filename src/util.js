/**
 * @desc 工具函数
 */ 

/**
 * @desc 比较的常量
 */  
export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}

/**
 * @desc 比较两个变量
 * @param {Any} a 
 * @param {Any} b 
 * @return {Number} ab相等=>0; a大于b=>1; a小于b=>-1;
 */ 
export function defaultCompare (a, b) {
  if (a === b) {
    return Compare.EQUALS
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

/**
 * @desc 根据数组下标进行交换
 * @param {Array} array 
 * @param {Number} a 
 * @param {Number} b 
 */ 
export function swap (array, a, b) {
  [array[a], array[b]] = [array[b], array[a]]
}
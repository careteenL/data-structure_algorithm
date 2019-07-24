/**
 * @desc 桶排序 - 更易读
 * @param {Array} array 
 * @param {Number} bucketSize [default:5]
 * @return {Array}
 */
import {
  insertionSort
} from './insertion-sort'
export function bucketSortEasy(array, bucketNum = 5, bucketSize = 10) {
  const buckets = Array.from({
    length: bucketNum
  }, () => [])
  // 放入桶中
  for (let i = 0; i < array.length; i++) {
    const index = ~~(array / bucketSize)
    buckets[index].push(array[i])
  }
  // 排序每只桶
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i])
  }
  // 取出数据
  return [].concat(...buckets)
}

// TODO remove Test
const arr = [29, 26, 7, 49, 8, 38, 29, 56]
console.log(bucketSortEasy(arr))

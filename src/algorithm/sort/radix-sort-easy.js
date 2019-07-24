/**
 * @desc 基数排序 - 更易读
 * @param {Array} array 
 * @return {Array}
 */
export function radixSortEasy(array) {
  const max = Math.max(...array)
  const buckets = Array.from({ length: 10 }, () => [])
  // 有效位数
  let m = 1
  while (m < max) {
    // 将数组放入桶中
    array.forEach(number => {
      const digit = ~~((number % (m * 10)) / m)
      buckets[digit].push(number)
    })
    // 从桶中取出元素
    let j = 0
    buckets.forEach(bucket => {
      while (bucket.length > 0) {
        array[j++] = bucket.shift()
      }
    })
    // 下一个位置
    m *= 10
  }
}

// TODO remove Test
const arr = [20, 45, 78, 22, 49, 25, 66, 3, 71, 5, 33]
radixSortEasy(arr)
console.log(arr)

/**
 * 从一个数组中取出多个元素
 * @param {Array} array 需要求组合的集合
 * @param {Number} n 取出元素个数
 */
const combination = (array, n) => {
  if ( n === 0 || array.length === n) {
    return [array.slice(0, n)]
  }
  const [first, ...others] = array
  let ret = []
  ret = ret.concat(combination(others, n - 1).map(item => [first, ...item]))
  ret = ret.concat(combination(others, n))
  return ret
}

// Test
const array = ['A', 'B', 'C', 'D']
console.log(combination(array, 2))
console.log(combination(array, 3))

export {
  combination
}

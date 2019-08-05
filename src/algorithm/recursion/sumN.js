/**
 * @desc 求一个数组中n个数字和为sum的解 - 递归求解
 * @param {Array} array 原数组
 * @param {Number} n 需要选择几个数（递归时：还需选择几个数）
 * @param {Number} sum 需要的和（递归时：剩余和）
 * @param {Number} i 指针 当前选到第几个元素
 * @param Array decisions 决策数组 只要第一次满足就会直接返回 故只求一个解
 * @return decisions 只求一个解
 */
const sumNRecursion = (array, n, sum, i = 0, decisions = []) => {
  // console.log(sum, i, n, decisions)
  if (sum === 0) {
    return decisions
  }
  if (i === array.length || n === 0) {
    return null
  }
  return sumNRecursion(array, n - 1, sum - array[i], i + 1, decisions.concat(array[i])) || sumNRecursion(array, n, sum, i + 1, decisions)
}

// Test
console.log(sumNRecursion([1, 2, 3, 4, 5], 3, 10))

/**
 * @desc 求一个数组中n个数字和为sum的解 - 利用位运算
 * @param {Array} array 原数组
 * @param {Number} n 需要选择几个数
 * @param {Number} m 需要的和
 * @return decisions 求所有解
 */
const sumNBitOperation = (array, n, m) => {
  let ret = []
  let max = 1 << array.length
  for (let i = 0; i < max; i++) {
    const { sum, p } = sumByBinaryCode(array, i)
    if (sum === m && p.length === n) {
      // return p
      ret.push(p)
    }
  }
  // return null
  return ret
}

const sumByBinaryCode = (array, code) => {
  const p = []
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    if (code & (1 << i)) {
      sum += array[i]
      p.push(array[i])
    }
  }
  // console.log({ sum, p })
  return { sum, p }
}

// Test
console.log(sumNBitOperation([1, 2, 3, 4, 5], 3, 10))

export {
  sumNRecursion,
  sumNBitOperation
}

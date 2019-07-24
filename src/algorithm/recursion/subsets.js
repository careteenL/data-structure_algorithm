/**
 * @desc 求一个数组的子集
 */
export function * subsetsGen (array) {
  for (let i = 0; i < 1 << array.length; i++) {
    let ret = []
    for (let k = 0; k < array.length; k++) {
      const take = i & (1 << k)
      take && ret.push(array[k])
    }
    yield ret.join('')
  }
}

export function subsets (array) {
  let outRet = []
  for (let i = 0; i < 1 << array.length; i++) {
    let ret = []
    for (let k = 0; k < array.length; k++) {
      const take = i & (1 << k)
      take && ret.push(array[k])
    }
    outRet.push(ret.join(''))
  }
  return outRet
}

// TODO remove Test
const array = ['a', 'b', 'c', 'd']
console.log([...subsetsGen(array)])
console.log(subsets(array))

import Queue from './queue.js'
/**
 * @desc 火车车厢重排问题 - 数组实现
 *       使用数组在出队操作时时间复杂度为O(n)
 * @param {Array} origin 原数组
 * @param {Array} transformed 是否满足的重排序数组
 * @return {Boolean}
 */
const isTransArray = (origin, transformed) => {
  const queue = []
  for (const x of transformed) {
    if (queue[queue.length - 1] === x) {
      queue.pop()
    }
    let y = null
    while (origin.length > 0 && (y = origin.shift()) !== x) {
      queue.unshift(y)
    }
  }
  return queue.length === 0
}

// Test
console.log(isTransArray([1, 2, 3, 4, 5], [1, 3, 2, 4, 5]))
console.log(isTransArray([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]))
console.log(isTransArray([1, 2, 3, 4, 5], [1, 5, 2, 3, 5]))
console.log(isTransArray([1, 2, 3, 4, 5], [1, 5, 2, 4, 3]))

/**
 * @desc 火车车厢重排问题 - 队列实现
 *       使用队列在出队操作时时间复杂度为O(1)
 * @param {Array} origin 原数组
 * @param {Array} transformed 是否满足的重排序数组
 * @return {Boolean}
 */
const isTransQueue = (origin, transformed) => {
  const queue = new Queue()
  for (const x of transformed) {
    if (queue.peek() === x) {
      queue.dequeue()
    }
    let y = null
    while (origin.length > 0 && (y = origin.shift()) !== x) {
      queue.enqueue(y)
    }
  }
  return queue.size() === 0
}

// Test
console.log(isTransQueue([1, 2, 3, 4, 5], [1, 3, 2, 4, 5]))
console.log(isTransQueue([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]))
console.log(isTransQueue([1, 2, 3, 4, 5], [1, 5, 2, 3, 5]))
console.log(isTransQueue([1, 2, 3, 4, 5], [1, 5, 2, 4, 3]))

export {
  isTransArray,
  isTransQueue
}
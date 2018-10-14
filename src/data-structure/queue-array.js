/**
 * @desc 用数组实现队列
 */ 
export default class QueueArray {
  constructor () {
    this.items = []
  }

  enqueue (element) {
    this.items.push(element)
  }

  dequeue () {
    return this.items.shift()
  }

  peek () {
    return this.items[0]
  }

  isEmpty () {
    return this.items.length === 0
  }

  size () {
    return this.items.length
  }

  toString () {
    return this.items.toString()
  }
}
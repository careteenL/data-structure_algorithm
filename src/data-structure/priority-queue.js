/* eslint-disable */
/**
 * @desc 优先队列
 */ 
export default class PriorityQueue {
  constructor () {
    this.items = []
  }

  _QueueEle (element, priority) {
    this.element = element
    this.priority = priority
  }

  enqueue (elemen, priority) {
    let _queueEle = new _QueueEle(elemen, priority)
    let added = false

    // 若新添加元素优先级比原队列元素下，则插入在对应下标
    for (let i = 0; i < this.items.length; i++) {
      if (_queueEle.priority < this.items[i].priority) {
        this.items.splice(i, 0, _queueEle)
        added = true
        break
      }      
    }
    // 否则放到队尾
    if (!added) {
      this.items.push(_queueEle)
    }
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
    if (this.isEmpty()) {
      return ''
    }
    let ret = `${this.items[0].element}`
    for (let i = 1; i < this.items.length; i++) {
      ret = `${ret},${this.items[i].element}`      
    }
    return ret
  }
}
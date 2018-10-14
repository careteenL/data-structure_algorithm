/**
 * @desc 使用hash实现队列
 */ 
export default class Queue {
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  /**
   * 入队
   * @param {Any} element 
   */ 
  enqueue (element) {
    this.items[this.count] = element
    this.count++
  }

  /**
   * @desc 出队
   * @return {Any}
   */ 
  dequeue () {
    if (this.isEmpty()) {
      return undefined
    }
    const ret = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return ret
  }

  /**
   * @desc 查看队头
   * @return {Any}
   */ 
  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  /**
   * @desc 队列是否为空
   * @return {Boolean}
   */ 
  isEmpty () {
    return this.size() === 0
  }

  /**
   * @desc 队列长度
   * @return {Number} 
   */ 
  size () {
    return this.count - this.lowestCount
  }

  /**
   * @desc 清空队列
   */ 
  clear () {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  /**
   * @desc 打印队列
   * @return {String}
   */ 
  toString () {
    if (this.isEmpty()) {
      return ''
    }   
    let ret = `${this.items[this.lowestCount]}` 
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      ret = `${ret},${this.items[i]}`      
    }
    return ret
  }
}
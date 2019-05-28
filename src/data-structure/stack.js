/**
 * @desc 使用hash实现栈
 */
export default class Stack {
  constructor () {
    this.count = 0
    this.items = {}
  }

  /**
   * @desc 进栈
   * @param {Any} element 栈内元素可为任意类型
   */ 
  push (element) {
    this.items[this.count] = element
    this.count++
  }

  /**
   * @desc 出栈
   * @return {Any} 
   */ 
  pop () {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const ret = this.items[this.count]
    delete this.items[this.count]
    return ret
  }

  /**
   * @desc 取栈顶元素
   * @return {Any}
   */ 
  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  /**
   * @desc 是否为空
   * @return {Boolean}
   */ 
  isEmpty () {
    return this.count === 0
  }

  /**
   * @desc 栈大小
   * @return {Number}
   */ 
  size () {
    return this.count
  }

  /**
   * @desc 清空栈
   */ 
  clear () {
    this.items = {}
    this.count = 0
  }

  /**
   * @desc 打印栈
   * @return {String}
   */ 
  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let ret = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      ret = `${ret},${this.items[i]}`      
    }
    return ret
  }
}
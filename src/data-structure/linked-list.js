/**
 * @desc 单向链表
 */ 
import { Node } from './models/linked-list-models'

export default class LinkedList {
  constructor () {
    this.count = 0 // 链表长度
    this.head = null // 链表头
  }

  /**
   * @desc 在链表最后添加元素
   * @param {Any} element
   */ 
  push (element) {
    const node = new Node(element)
    let current
    if (this.head === null) { // 链表为空时
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  /**
   * @desc 根据下标获取链表元素
   * @param {Number} index 
   * @return {Node}
   */ 
  getElementAt (index) {
    this._checkIndex(index)
    let node = this.head
    for (let i = 0; i < index && node !== null; i++) {
      node = node.next      
    }
    return node
  }

  /**
   * @desc 在任意位置插入元素
   * @param {Any} element 插入的元素
   * @param {Number} index 期望插入的下标
   * @return {Boolean} 插入成功返回true
   */ 
  insert (element, index) {
    this._checkIndex(index)
    const node = new Node(element)
    if (index === 0) { // 插到头
      node.next = this.head
      this.head = node
    } else { // 插到非头任意位置
      const previous = this.getElementAt(index - 1)
      node.next = previous.next
      previous.next = node
    }
    this.count++
    return true
  }

  /**
   * @desc 根据下标移除某一项
   * @param {Number} index 
   * @return {Any} 被移除项的值
   */ 
  removeAt (index) {
    this._checkIndex(index)
    let current = this.head
    if (index === 0) { // 移除头
      this.head = current.next
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.count--
    return current.element
  }

  /**
   * @desc 根据值移除某一项
   * @param {Any} element 
   */ 
  remove (element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  /**
   * @desc 获取某一项在链表中的下标
   * @param {Any} element 
   * @return {Number}
   */ 
  indexOf (element) {
    let current = this.head
    for (let i = 0; i < this.count && current !== null; i++) {
      if (element === current.element) {
        return i
      }
      current = current.next
    }
    return -1
  }

  /**
   * @desc 判断是否为空
   * @return {Boolean}
   */ 
  isEmpty () {
    return this.count === 0
  }

  /**
   * @desc 获取链表长度
   * @return {Number}
   */ 
  size () {
    return this.count
  }

  /**
   * @desc 获取链表头
   * @return {Node}
   */ 
  getHead () {
    return this.head
  }

  /**
   * @desc 清空链表
   */ 
  clear () {
    this.head = null
    this.count = 0
  }

  /**
   * @desc 反转单向链表
   */
  reverse (p = this.head) {
    if (p.next) {
      this.reverse(p.next)
      p.next.next = p
      p.next = null
    } else {
      this.head = p
    }
    return this
  }

  /**
   * @desc 打印链表
   * @return {String}
   */ 
  toString () {
    if (this.head === null) {
      return ''
    }
    let ret = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current !== null; i++) {
      ret = `${ret},${current.element}`
      current = current.next      
    }
    return ret
  }

  /**
   * @desc 检查下标是否溢出
   * @param {Number} index 
   */ 
  _checkIndex (index) {
    if (index < 0 || index > this.count) throw new Error('index error')
  }
}
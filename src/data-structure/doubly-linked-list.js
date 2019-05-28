/**
 * @desc 双向链表
 */ 
import LinkedList from './linked-list'
import { DoublyNode } from './models/linked-list-models'

export default class DoublyLinkedList extends LinkedList {
  constructor () {
    super()
    this.tail = null // 链尾
  }

  /**
   * @desc 在链表最后添加元素
   * @param {Any} element
   */ 
  push (element) {
    const node = new DoublyNode(element)
    if (this.head === null) { // 链表为空时
      this.head = node
      this.tail = node // new
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.count++
  }

  /**
   * @desc 根据下标获取链表元素
   * @param {Number} index 
   * @return {Node}
   */ 
  // getElementAt (index) {}  

  /**
   * @desc 在任意位置插入元素
   * @param {Any} element 插入的元素
   * @param {Number} index 期望插入的下标
   * @return {Boolean} 插入成功返回true
   */ 
  insert (element, index) {
    this._checkIndex(index)
    const node = new DoublyNode(element)
    let current = this.head
    if (index === 0) { // 插到链头
      if (this.head === null) { // new
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        this.head.prev = node
        this.head = node // new
      }
    } else if (index === this.count) { // 插到链尾
      current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    } else { // 插到非头任意位置
      const previous = this.getElementAt(index - 1)
      current = previous.next
      node.next = current
      previous.next = node
      current.prev = node // new
      node.prev = previous // new
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
      this.head = this.head.next
      if (this.count === 1) { // 链表只有一项时需处理链尾
        this.tail = null
      } else {
        this.head.prev = null
      }
    } else if (index === this.count - 1) { // 移除链尾
      current = this.tail
      this.tail = current.prev
      this.tail.next = null
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
      current.next.prev = previous // new
    }
    this.count--
    return current.element
  }

  /**
   * @desc 获取某一项在链表中的下标
   * @param {Any} element 
   * @return {Number}
   */ 
  // indexOf (element) {}

  /**
   * @desc 判断是否为空
   * @return {Boolean}
   */ 
  // isEmpty () {}

  /**
   * @desc 获取链表长度
   * @return {Number}
   */ 
  // size () {}

  /**
   * @desc 获取链表头
   * @return {Node}
   */ 
  // getHead () {}

  /**
   * @desc 获取链表尾
   * @return {Node}
   */   
  getTail () {
    return this.tail
  }

  /**
   * @desc 清空链表
   */ 
  clear () {
    super.clear()
    this.tail = null
  }

  /**
   * @desc 打印链表
   * @return {String}
   */ 
  // toString () {}

  /**
   * @desc 反向打印链表
   * @return {String}
   */   
  inverseToString () {
    if (this.tail === null) {
      return ''
    }
    let ret = `${this.tail.element}`
    let previous = this.tail.prev
    while (previous !== null) {
      ret = `${ret},${previous.element}`
      previous = previous.prev
    }
    return ret
  }

  /**
   * @desc 检查下标是否溢出
   * @param {Number} index 
   */ 
  // _checkIndex (index) {}
}
/**
 * @desc 循环链表
 */ 
import LinkedList from './linked-list'
import { Node } from './models/linked-list-models'

export default class CircularLinkedList extends LinkedList {
  constructor () {
    super()
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
      current = this.getElementAt(this.size() - 1)
      current.next = node
    }
    node.next = this.head
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
    const node = new Node(element)
    let current = this.head
    if (index === 0) { // 插到头
      if (this.head === null) {
        this.head = node
        node.next = this.head
      } else {
        node.next = current
        current = this.getElementAt(this.size())
        // update last element
        this.head = node
        current.next = this.head        
      }
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
      if (this.size() === 1) {
        this.head = null
      } else {
        const removed = this.head
        current = this.getElementAt(this.size() - 1)
        this.head = this.head.next
        current.next = this.head
        current = removed        
      }
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
  // remove (element) {}

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
   * @desc 清空链表
   */ 
  // clear () {}

  /**
   * @desc 打印链表
   * @return {String}
   */ 
  // toString () {}

  /**
   * @desc 检查下标是否溢出
   * @param {Number} index 
   */ 
  // _checkIndex (index) {}
}
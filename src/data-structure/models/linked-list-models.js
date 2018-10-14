/**
 * @desc 为链表提供的基础Node类
 */ 
export class Node {
  constructor (element, next) {
    this.element = element
    this.next = next
  }
}

export class DoublyNode extends Node {
  constructor (element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}
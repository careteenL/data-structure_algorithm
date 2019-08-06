/**
 * @desc 使用两个栈实现一个队列
 */
class QueueStack {
  constructor () {
    this.stack1 = []
    this.stack2 = []
  }

  enqueue (element) {
    this.stack1.push(element)
  }

  // @tip 利用栈的`pop()`方法的时间复杂度为`O(1)`去模拟队列的出队
  dequeue () {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop())
    }
    if (this.stack2.length > 0) {
      return this.stack2.pop()
    } else {
      throw Error('[Queue underFlow]: the queue had not element !')
    }
  }
}

export default QueueStack
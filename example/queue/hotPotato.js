/**
 * @desc 循环队列的运用-击鼓传花
 */ 
import Queue from '../../src/data-structure/queue.js'
function hotPotato (nameList, num, callback) {
  let queue = new Queue()
  // 先挨个入队
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])    
  }
  let eliminated = ''
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      // 从队头移除，再添加到队尾，模拟循环
      queue.enqueue(queue.dequeue())            
    }
    eliminated = queue.dequeue()
    // console.log(`${eliminated}: out !`)
    callback && callback(eliminated)
  }
  return queue.dequeue()
}
export default hotPotato

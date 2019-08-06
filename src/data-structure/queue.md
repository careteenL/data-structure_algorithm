## 队列 - Queue

### Catalog

- [What](#what)
- [How](#how)
- [API](#api)
- [Usage](#usage)
- [Where](#where)
  - [循环队列的运用-击鼓传花](#循环队列的运用-击鼓传花)
  - [火车车厢重排问题](#火车车厢重排问题)

### What

队列是遵循FIFO（先入先出）原则的一组有序的项。队列在尾部添加新元素，从顶部移除元素。最新添加的元素必须排在队列的末尾。

### How

- [使用数组实现队列](./queue-array.js)
> 实现方式和**使用数组实现栈**相似，区别在于出队是遵循先入先出的原则

- [使用hash实现队列](./queue.js)
> 实现方式和**使用hash实现栈**相似，区别在于出队是遵循先入先出的原则
> 和数组的`Array.prototype.shift`复杂度为`O(n)`不同，出队的时间复杂度为`O(1)`

- [使用两个栈实现队列](./queue-stack.js)
> 主要是利用栈的`pop()`方法的时间复杂度为`O(1)`去模拟队列的出队
> [测试用例](../../test/queue.spec.js#L40)

- [优先队列](./priority-queue.js)
> 新增一个**优先级**字段，每次入队都对根据优先级来入队

```js
import { PriorityQueue } from 'ct-dsa'
let priorityQueue = new PriorityQueue()
priorityQueue.enqueue('Careteen', 2)
priorityQueue.enqueue('Lanlan', 1)
priorityQueue.print() // => Lanlan,Careteen
```

### API

#### queue.enqueue(element)

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 入队 | element | 栈内元素可为任意类型 | Any | void |

#### queue.dequeue()

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 出队 | - | - | - | Any |

#### queue.peek()

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 取队头元素 | - | - | - | Any |

#### queue.isEmpty()

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 是否为空 | - | - | - | Boolean |

#### queue.size()

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 队列大小 | - | - | - | Number |

#### queue.clear()

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 清空队列 | - | - | - | void |

#### queue.toString()

| desc | param | mean | type | return |
| :---: | :---: | :--: | :--: | :--: |
| 打印队列 | - | - | - | String |

### Usage

```js
import { Queue } from 'ct-dsa'
const queue = new Queue();
console.log(queue.isEmpty()); // outputs true
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString()); // John,Jack
queue.enqueue('Camila');
console.log(queue.toString()); // John,Jack,Camila
console.log(queue.size()); // outputs 3
console.log(queue.isEmpty()); // outputs false
queue.dequeue(); // remove John
queue.dequeue(); // remove Jack
console.log(queue.toString()); // Camila
```

### Where

#### 循环队列的运用-击鼓传花

- [循环队列的运用-击鼓传花](../../example/queue/hotPotato.js)详解
```js
import { hotPotato } from 'ct-dsa'
let nameList = ['Careteen', 'Lanlan', 'High', 'Letme', 'Uzi']
hotPotato(nameList, 7)
```

#### 火车车厢重排问题

- [火车车厢重排问题](./queue-problem.md)详解

#### 更多使用场景...


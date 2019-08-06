import 'mocha'
import { expect } from 'chai'

import hotPotato from '../example/queue/hotPotato.js'
import { isTransArray, isTransQueue } from '../src/data-structure/queue-problem.js'
import QueueStack from '../src/data-structure/queue-stack.js'

describe('queue', () => {
  it('circle queue: hotPotato', () => {
    let nameList = ['Careteen', 'Lanlan', 'High', 'Letme', 'Mlxg']
    let winner = hotPotato(nameList, 7, (eliminated) => {
      console.log(`${eliminated}: out !`)
    })
    console.log(`Winner is: ${winner}`)
    expect(winner).to.equal(nameList[0])
  })

  it('isTransArray', () => {
    // console.log(isTransArray([1, 2, 3, 4, 5], [1, 3, 2, 4, 5]))
    // console.log(isTransArray([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]))
    // console.log(isTransArray([1, 2, 3, 4, 5], [1, 5, 2, 3, 5]))
    // console.log(isTransArray([1, 2, 3, 4, 5], [1, 5, 2, 4, 3]))
    expect(isTransArray([1, 2, 3, 4, 5], [1, 3, 2, 4, 5])).to.equal(true)
    expect(isTransArray([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])).to.equal(false)
    expect(isTransArray([1, 2, 3, 4, 5], [1, 5, 2, 3, 5])).to.equal(false)
    expect(isTransArray([1, 2, 3, 4, 5], [1, 5, 2, 4, 3])).to.equal(false)
  })

  it('isTransQueue', () => {
    // console.log(isTransQueue([1, 2, 3, 4, 5], [1, 3, 2, 4, 5]))
    // console.log(isTransQueue([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]))
    // console.log(isTransQueue([1, 2, 3, 4, 5], [1, 5, 2, 3, 5]))
    // console.log(isTransQueue([1, 2, 3, 4, 5], [1, 5, 2, 4, 3]))
    expect(isTransQueue([1, 2, 3, 4, 5], [1, 3, 2, 4, 5])).to.equal(true)
    expect(isTransQueue([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])).to.equal(false)
    expect(isTransQueue([1, 2, 3, 4, 5], [1, 5, 2, 3, 5])).to.equal(false)
    expect(isTransQueue([1, 2, 3, 4, 5], [1, 5, 2, 4, 3])).to.equal(false)
  })

  it('Use two stacks to imp queue', () => {
    const queueStack = new QueueStack()
    queueStack.enqueue(1)
    queueStack.enqueue(2)
    queueStack.enqueue(3)
    queueStack.enqueue(4)
    queueStack.enqueue(5)
    expect(queueStack.dequeue()).to.equal(1)
    expect(queueStack.dequeue()).to.equal(2)
    expect(queueStack.dequeue()).to.equal(3)
    expect(queueStack.dequeue()).to.equal(4)
    expect(queueStack.dequeue()).to.equal(5)
  })
})
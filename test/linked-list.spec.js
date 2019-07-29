import 'mocha'
import { expect } from 'chai'

import LinkedList from '../src/data-structure/linked-list.js'

let linkedList1 = new LinkedList()
linkedList1.push(1)
linkedList1.push(2)
linkedList1.push(3)
linkedList1.push(4)
linkedList1.push(5)

let linkedList2 = new LinkedList()
linkedList2.push(1)
linkedList2.push(2)
linkedList2.push(3)
linkedList2.push(4)
linkedList2.push(5)
// console.log(linkedList.toString())
// console.log(linkedList2.reverse().toString())

describe('LinkedList', () => {
  it('print linked list', () => {
    expect(linkedList1.toString()).to.equal('1,2,3,4,5')
  })
  it('reverse linked list', () => {
    expect(linkedList2.reverse().toString()).to.equal('5,4,3,2,1')
  })
})
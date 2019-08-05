
import 'mocha'
import { expect } from 'chai'

import BST from '../src/data-structure/binary-search-tree.js'

describe('BST', () => {
  it('BST: inOrderTraverse', () => {
    let bst = new BST()
    bst.insert(1)
    bst.insert(5)
    bst.insert(9)
    bst.insert(4)
    bst.insert(2)
    bst.insert(7)
    bst.insert(3)
    bst.insert(8)
    let orderList = []
    bst.inOrderTraverse((key) => {
      orderList.push(key)
    })
    // console.log(orderList)
    expect(orderList).to.eql([ 1, 2, 3, 4, 5, 7, 8, 9 ])
  })
  
  it('BST: reverse inOrderTraverse', () => {
    let bst = new BST()
    bst.insert(1)
    bst.insert(5)
    bst.insert(9)
    bst.insert(4)
    bst.insert(2)
    bst.insert(7)
    bst.insert(3)
    bst.insert(8)
  
    bst.reverse()
    let reverseOrderList = []
    bst.inOrderTraverse((key) => {
      reverseOrderList.push(key)
    })    
    // console.log(reverseOrderList)
    expect(reverseOrderList).to.eql([ 9, 8, 7, 5, 4, 3, 2, 1 ])
  })
})
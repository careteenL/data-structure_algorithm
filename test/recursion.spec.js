
import 'mocha'
import { expect } from 'chai'

import {  sumNRecursion, sumNBitOperation } from '../src/algorithm/recursion/sumN.js'

describe('sumN', () => {
  it('sumN: sumNRecursion', () => {
    let ret = sumNRecursion([1, 2, 3, 4, 5], 3, 10)
    expect(ret).to.eql([ 1, 4, 5 ])
  })

  it('sumN: sumNBitOperation', () => {
    let ret = sumNBitOperation([1, 2, 3, 4, 5], 3, 10)
    expect(ret).to.eql([ [ 2, 3, 5 ], [ 1, 4, 5 ] ])
  })
})
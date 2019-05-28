import 'mocha'
import { expect } from 'chai'

import { binarySearch } from '../src/algorithm/search/binary-search'

const arr = [3, 5, 20, 22, 25, 33, 45, 49, 66, 71, 78]

describe('binary Search', () => {
  it('search 88 but not exist', () => {
    expect( binarySearch(arr, 88)).to.equal(-1)
  })

  it('search 68 but not exist', () => {
    expect( binarySearch(arr, 68)).to.equal(-1)
  })

  it('search 22 but not exist', () => {
    expect( binarySearch(arr, 22)).to.equal(3)
  })
})
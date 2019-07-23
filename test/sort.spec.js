import 'mocha'
import { expect } from 'chai'

import { radixSortEasy } from '../src/algorithm/sort/radix-sort-easy'

const arr = [20, 45, 78, 22, 49, 25, 66, 3, 71, 5, 33]
const expectArr = [3, 5, 20, 22, 25, 33, 45, 49, 66, 71, 78]

describe('radix Sort Easy', () => {
  it('radixSortEasy', () => {
    expect(radixSortEasy(arr)).to.equal(expectArr)
  })
})
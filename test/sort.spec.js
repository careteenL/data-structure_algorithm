import 'mocha'
import { expect } from 'chai'

import { radixSortEasy } from '../src/algorithm/sort/radix-sort-easy'
import { bucketSortEasy } from '../src/algorithm/sort/bucket-sort-easy'

const radixPreArr = [20, 45, 78, 22, 49, 25, 66, 3, 71, 5, 33]
const radixExpectArr = [3, 5, 20, 22, 25, 33, 45, 49, 66, 71, 78]
describe('radix Sort', () => {
  it('radixSortEasy', () => {
    expect(radixSortEasy(radixPreArr)).to.equal(radixExpectArr)
  })
})

const bucketPreArr = [29, 26, 7, 49, 8, 38, 29, 56]
const bucketExpectArr = [7, 8, 26, 29, 29, 38, 49, 56]
describe('bucket Sort', () => {
  it('bucketSortEasy', () => {
    expect(bucketSortEasy(bucketPreArr)).to.equal(bucketExpectArr)
  })
})

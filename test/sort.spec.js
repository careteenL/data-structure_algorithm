import 'mocha'
import { expect } from 'chai'

import { quickSort, quickSortPure } from '../src/algorithm/sort/quick-sort'
import { radixSortEasy } from '../src/algorithm/sort/radix-sort-easy'
import { bucketSortEasy } from '../src/algorithm/sort/bucket-sort-easy'

const quickPreArr = [20, 45, 78, 22, 49, 25, 66, 3, 71, 5, 33]
let quickPreArrPure = [20, 45, 78, 22, 49, 25, 66, 3, 71, 5, 33]
const quickExpectArr = [3, 5, 20, 22, 25, 33, 45, 49, 66, 71, 78]
describe('quick Sort', () => {
  it('quickSort', () => {
    expect(quickSort(quickPreArr)).to.eql(quickExpectArr)
  })

  it('quickSortPure', () => {
    quickSortPure(quickPreArrPure)
    expect(quickPreArrPure).to.eql(quickExpectArr)
  })
})

const radixPreArr = [20, 45, 78, 22, 49, 25, 66, 3, 71, 5, 33]
const radixExpectArr = [3, 5, 20, 22, 25, 33, 45, 49, 66, 71, 78]
describe('radix Sort', () => {
  it('radixSortEasy', () => {
    radixSortEasy(radixPreArr)
    expect(radixPreArr).to.eql(radixExpectArr)
  })
})

const bucketPreArr = [29, 26, 7, 49, 8, 38, 29, 56]
const bucketExpectArr = [7, 8, 26, 29, 29, 38, 49, 56]
describe('bucket Sort', () => {
  it('bucketSortEasy', () => {
    expect(bucketSortEasy(bucketPreArr)).to.eql(bucketExpectArr)
  })
})

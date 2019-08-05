import 'mocha'
import { expect } from 'chai'

import hotPotato from '../example/queue/hotPotato.js'
import { isTransArray, isTransQueue } from '../src/data-structure/queue-problem.js'

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
})
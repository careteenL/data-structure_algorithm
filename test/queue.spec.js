import 'mocha'
import { expect } from 'chai'

import hotPotato from '../example/queue/hotPotato.js'

describe('queue', () => {
  it('circle queue: hotPotato', () => {
    let nameList = ['Careteen', 'Lanlan', 'High', 'Letme', 'Mlxg']
    let winner = hotPotato(nameList, 7, (eliminated) => {
      console.log(`${eliminated}: out !`)
    })
    console.log(`Winner is: ${winner}`)
    expect(winner).to.equal(nameList[0])
  })
})
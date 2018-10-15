import Set from '../../src/data-structure/set'

const set = new Set()

set.add('Careteen')
console.log(set.values()) // => ['Careteen']
console.log(set.has('Careteen')) // => true
console.log(set.size()) // => 1

set.add('Lanlan')
console.log(set.values()) // => ['Careteen', 'Lanlan']
console.log(set.has('High')) // => false
console.log(set.size()) // => 2

set.delete('Lanlan')
console.log(set.values()) // => ['Lanlan']

set.delete('Careteen')
console.log(set.values()) // => ['Careteen']
// import merge from 'three-way-merge';
const merge = require('three-way-merge').default

const base =     ['1', '2', '3', '4', '68', '6'].join("\n");
const left =     [     '2', '3', '4', '67', '6'].join("\n");
const right =    ['1', '2', '3', '4', '98', '6'].join("\n");

const merged = merge(left, base, right);

console.log(merged.conflict);       // => true
console.log(merged.joinedResults()) // => 
// <<<<<<< YOUR CHANGES
// 2
// 3
// 4
// 67
// =======
// 1
// 2
// 3
// 4
// 98
// >>>>>>> APP AUTHORS CHANGES
// 6

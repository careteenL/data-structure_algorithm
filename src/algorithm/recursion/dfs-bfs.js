/**
 * @desc 构造节点
 * @param {Any} key 
 */
function Node (key) {
  this.children = []
  this.key = key
}

// 生成树结构
const n1 = new Node('1')
const n2 = new Node('2')
const n3 = new Node('3')
const n4 = new Node('4')
const n5 = new Node('5')
const n6 = new Node('6')

n1.children.push(n2)
n1.children.push(n5)
n2.children.push(n3)
n2.children.push(n4)
n5.children.push(n6)

/**
 * @desc dfs 深度优先搜索
 * @param {Node} node 
 */
function dfs (node) {
  const stack = [node]
  let ret = []
  while (stack.length > 0) {
    const first = stack.shift()
    ret.push(first.key)
    first.children.slice().reverse().forEach(child => stack.unshift(child))
  }
  return ret
}
// Test
console.log('dfs: ', dfs(n1))

/**
 * @desc dfs 深度优先搜索 - 递归实现
 * @param {Node} node 
 */
function dfsRecursion (node) {
  let ret = []
  _dfsRecursion(node, ret)
  return ret
}

function _dfsRecursion (node, ret) {
  ret.push(node.key)
  node.children.forEach(child => _dfsRecursion(child, ret))
}
// Test
console.log('dfsRecursion: ', dfsRecursion(n1))

/**
 * @desc dfs 深度优先搜索
 * @param {Node} node 
 */
function bfs (node) {
  const queue = [node]
  let ret = []
  while (queue.length > 0) {
    const first = queue.shift()
    ret.push(first.key)
    first.children.forEach(child => queue.push(child))
  }
  return ret
}
// Test
console.log('bfs: ', bfs(n1))

export {
  dfs,
  dfsRecursion,
  bfs
}
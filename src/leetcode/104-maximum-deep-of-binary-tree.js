/**
 * @desc 二叉树的最大深度
 * @leetcode https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * @think 方法一： BFS
 * @param {TreeNode} root 
 * @return {Number}
 */
var maxDepth = function (root) {
  if (root === null) return 0
  var queue = [root]
  var deep = 0
  while (queue.length > 0) {
    deep++
    var temp = queue.length
    while (temp > 0) {
      var curr = queue.shift()
      if (curr.left !== null) {
        queue.push(curr.left)
      }
      if (curr.right !== null) {
        queue.push(curr.right)
      }
      temp--
    }
  }
  return deep
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

//        5
//      /  \
//     4    8
//    /     / \
//  11     13  4
//  / \         \
// 7   2         1
//  \
//   10
// Test
var root = new TreeNode(5)
var node1 = new TreeNode(4)
var node2 = new TreeNode(8)
var node3 = new TreeNode(11)
var node4 = new TreeNode(13)
var node5 = new TreeNode(4)
var node6 = new TreeNode(7)
var node7 = new TreeNode(2)
var node8 = new TreeNode(1)
var node9 = new TreeNode(10)
root.left = node1
root.right = node2
node1.left = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7
node5.right = node8
node6.right = node9

console.log(maxDepth(root))

/**
 * @think 方法二： 递归实现DFS
 * @param {TreeNode} root 
 * @return {Number}
 */
var maxDepth2 = function (root) {
  if (root == null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
console.log(maxDepth2(root))

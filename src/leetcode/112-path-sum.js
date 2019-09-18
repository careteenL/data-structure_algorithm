/**
 * @desc 路径总和
 *      给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * @leetcode https://leetcode-cn.com/problems/path-sum/
 * @think 方法一：递归
 * @time  最坏情况下每个节点都会访问一次 O(N)
 *        最好情况下也就是满足条件的节点正好是树的左视图，复杂度为O(log(N))，N是节点个数
 * @space 最坏情况下整个树是非平衡的，例如每个节点都只有一个节点，递归会调用N次即树的高度，所以栈的空间开销为O(N)
 *        最好情况下树是完全平衡的，高度只有log(N)，所以空间复杂度为O(log(N))
 * @param {TreeNode} root
 * @param {number}   sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false
  sum -= root.val
  if (!root.left && !root.right) {
    return sum === 0
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
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
// Test
var head = new TreeNode(5)
var node1 = new TreeNode(4)
var node2 = new TreeNode(8)
var node3 = new TreeNode(11)
var node4 = new TreeNode(13)
var node5 = new TreeNode(4)
var node6 = new TreeNode(7)
var node7 = new TreeNode(2)
var node8 = new TreeNode(1)
head.left = node1
head.right = node2
node1.left = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7
node5.right = node8

console.log(hasPathSum(head, 22)) // 5 -> 4 -> 11 -> 2
console.log(hasPathSum(head, 23))

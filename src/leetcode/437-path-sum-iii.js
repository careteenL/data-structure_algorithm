/**
 * @desc 路径总和 III
 *      给定一个二叉树，它的每个结点都存放着一个整数值。
 *      找出路径和等于给定数值的路径总数。
 *      路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * @leetcode https://leetcode-cn.com/problems/path-sum-iii/
 * @think 方法一：双重递归
 * @param {TreeNode} root
 * @param {number}   sum
 * @return {boolean}
 */
var pathSum = function (root, sum) {
  if (root === null) return 0
  return pathByDFS(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
}

var pathByDFS = function (root, sum) {
  if (root === null) return 0
  var res = 0
  if (root.val === sum) {
    res++
  }
  res += pathByDFS(root.left, sum - root.val)
  res += pathByDFS(root.right, sum - root.val)
  return res
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
var root = new TreeNode(5)
var node1 = new TreeNode(4)
var node2 = new TreeNode(8)
var node3 = new TreeNode(11)
var node4 = new TreeNode(13)
var node5 = new TreeNode(4)
var node6 = new TreeNode(7)
var node7 = new TreeNode(2)
var node8 = new TreeNode(1)
root.left = node1
root.right = node2
node1.left = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7
node5.right = node8

console.log(pathSum(root, 13)) // 11->2 / 5->8 / 13 / 8->4->1   => 4

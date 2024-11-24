/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @desc 102. 二叉树的层序遍历
 * @leetcode https://leetcode.cn/problems/binary-tree-level-order-traversal/
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {};

// 实现 bfs
var bfs = function (root) {
  const queue = [root];
  const answer = [];
  while (queue.length > 0) {
    const head = queue.shift();
    answer.push(head.val);
    if (head.left) {
      queue.push(head.left);
    }
    if (head.right) {
      queue.push(head.right);
    }
  }
  return answer;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);

node1.left = node2;
node1.right = node5;
node2.left = node3;
node2.right = node4;
node5.left = node6;

//              1
//          2       5
//      3     4   6
//  1 2 5 3 4 6
console.log(bfs(node1));

// 实现 dfs
function dfs(root) {
  const list = [root];
  const answer = [];
  while (list.length > 0) {
    const head = list.shift();
    answer.push(head.val);
    if (head.right) {
      list.unshift(head.right);
    }
    if (head.left) {
      list.unshift(head.left);
    }
  }
  return answer;
}

// 3 4 5
// 1 2 3 4 5 6
console.log(dfs(node1));

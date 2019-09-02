/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val
  this.next = null
}
var head = new ListNode(1)
var node2 = new ListNode(2)
var node3 = new ListNode(3)
var node4 = new ListNode(4)
var node5 = new ListNode(5)
head.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
/**
 * @desc 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * @leetcode https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * @think 递归解法
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 终止条件：链表只剩一个节点或者没节点了，没发交换。返回的时候已经处理好的链表
  if (!head || !head.next) return head
  // 一共三个节点:head, next, swapPairs(next.next)
  // 下面的任务便是交换这3个节点中的前两个节点
  var next = head.next
  head.next = swapPairs(next.next)
  next.next = head
  // 根据第二步：返回给上一级的是当前已经完成交换后，即处理好了的链表部分
  return next
}
// Test
console.log(swapPairs(head), head)

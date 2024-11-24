/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 237. 删除链表中的节点
 * @leetcode https://leetcode.cn/problems/delete-node-in-a-linked-list/description/
 * @param {ListNode} head
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNodeError = function (head, node) {
  let current = head;
  while (current) {
    if (current === node) {
      current.val = current.next.val;
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head;
};

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// 1 2 3 4 5
// 1 2 3 5
console.log(deleteNode(node3));

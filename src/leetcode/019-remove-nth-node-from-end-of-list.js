/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 59. 删除链表的倒数第 N 个结点
 * @leetcode https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEndError = function (head, n) {
  let current = head;
  let layer = 0;
  while (current) {
    layer++;
    current = current.next;
  }
  let _current = head;
  const nLayer = layer - n;
  let _layer = 0;
  while (_current) {
    if (_layer === nLayer) {
      if (_current.next) {
        _current.val = _current.next.val;
        _current.next = _current.next.next;
      } else {
        _current = null;
      }
      // break;
    }
    _layer++;
    _current = _current.next;
  }
  return head;
};

// 两个指针，找到需要删除的前一个节点，然后直接将 next 指向下下个即可
var removeNthFromEnd = function (head, n) {
  const dummyNode = ListNode(-1, head);
  let left = dummyNode;
  let right = dummyNode;
  while (n--) {
    right = right.next;
  }
  while (right.next) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;
  return dummyNode.next;
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
console.log(removeNthFromEnd(node1, 2));

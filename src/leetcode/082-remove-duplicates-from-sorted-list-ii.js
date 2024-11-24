/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @desc 82. 删除排序链表中的重复元素 II
 * @leetocde https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const dummy = new ListNode(-1, head);
  let current = dummy;
  while (current.next && current.next.next) {
    const val = current.next.val;
    if (val === current.next.next.val) {
      while (current.next && current.next.val === val) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }
  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1 = new ListNode(1);
const node2 = new ListNode(1);
const node3 = new ListNode(3);
const node4 = new ListNode(3);
const node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// 1 1 3 3 5
// 5
// dummy 1 1 3 3 5
console.log(deleteDuplicates(node1));

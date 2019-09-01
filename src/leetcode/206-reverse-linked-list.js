/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val
 *     this.next = null
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
 * @desc 反转单向列表
 * @leetcode https://leetcode-cn.com/problems/reverse-linked-list/
 * @think 方法一 递归
 * [解题思路-PPT形式](https://github.com/careteenL/data-structure_algorithm/blob/0816-leetcode/src/data-structure/reverse-linked-list.md)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  function _reverse(head) {
    // 2. 从链表倒数第二个反向向前遍历
    // 2.1 倒数第二个节点的next的next置为当前节点
    // 2.2 倒数第三个节点的next的next置为当前节点
    // ...
    // 直到第一个节点
    if (head && head.next) {
      _reverse(head.next)
      head.next.next = head
      head.next = null
    } else { // 1. 找到链表尾巴，将其作为表头
      _reverse.head = head
    }
  }
  _reverse(head)
  return _reverse.head
}

// Test
console.log(reverseList(head))

/**
 * @think 方法二 迭代
 * 在遍历列表时，将当前节点的next指针改为指向前一个元素。由于节点没有引用其上一个节点，因此必须事先存储其前一个元素。
 * 在更改引用之前，还需要另一个指针来存储下一个节点。不要忘记在最后返回新的头引用！
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function (head) {
  var prev = null,
    curr = head
  while (curr) {
    var _next = curr.next
    curr.next = prev
    prev = curr
    curr = _next
  }
  return prev
}

// Test
console.log(reverseList2(head))

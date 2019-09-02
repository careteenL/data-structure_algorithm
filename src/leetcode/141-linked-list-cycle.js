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
// node5.next = node3 控制是否为环

/**
 * @desc 给定一个链表，判断链表中是否有环。
 * @leetcode https://leetcode-cn.com/problems/linked-list-cycle/
 * @think 方法一 数组 最慢 不推荐
 * @time O(n^3) [].indexOf()时间复杂度为O(n) 1^2 + 2^2 + 3^2 + ... + n^2 = n(n+1)(2n+1)/6
 * @space O(n) 遍历完整个链表 数组会新增n项
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  var ret = []
  while (head) {
    if (ret.indexOf(head) > -1) {
      return true
    } else {
      ret.push(head)
      head = head.next
    }
  }
  return false
}
// Test
console.log(hasCycle(head))

/**
 * @think 方法二 Map
 * @param {ListNode} head
 * @time O(n) 遍历一次即可 map.has时间复杂度为O(1)
 * @space O(n) 遍历完整个链表 map会新增n项
 */
var hasCycle2 = function (head) {
  var map = new Map()
  while (head) {
    if (map.has(head)) {
      return true
    } else {
      map.set(head)
      head = head.next
    }
  }
  return false
}
// Test
console.log(hasCycle2(head))

/**
 * @think 方法三 双指针
 * 快指针走两步，慢指针走一步
 * 如果是环，快指针一定能追上慢指针
 *  否则快指针一定会走到链尾
 * @time O(n)
 * @space O(1)
 */
var hasCycle3 = function (head) {
  if (!head || !head.next) return false
  var slow = head,
    fast = head.next
  while (fast != slow) {
    if (!fast || !fast.next) return false
    fast = fast.next.next
    slow = slow.next
  }
  return true
}
// Test
console.log(hasCycle3(head))

/**
 * @think 方法四 双指针 对方法三的改进 快那么一丢丢
 */
var hasCycle4 = function (head) {
  var slow = head,
    fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) return true
  }
  return false
}
// Test
console.log(hasCycle4(head))

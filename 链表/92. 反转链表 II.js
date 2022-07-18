/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
  // 翻转前n个
  // 后驱节点
  let successor = null
  function reverseN(head, n) {
    if (n === 1) {
      successor = head.next
      return head
    }
    let last = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = successor
    return last
  }
  if (left === 1) {
    return reverseN(head, right)
  }
  head.next = reverseBetween(head.next, left - 1, right - 1)
  return head
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 翻转a到b
function reverseAToB (a, b) {
  let pre = null, cur = a, nxt = a
  while(cur !== b) {
    nxt = cur.next
    cur.next = pre
    pre = cur
    cur = nxt
  }
  return pre
}
var reverseKGroup = function(head, k) {
  if (head === null) return head
  let a = b = head
  for(let i = 0; i < k; i++) {
    if (b === null) {
      return head
    }
    b = b.next
  }
  let newLink = reverseAToB(a, b)
  a.next = reverseKGroup(b, k)
  return newLink
};

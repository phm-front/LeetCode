/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 翻转链表
  let left = head;
  function traverse(right) {
    if (right === null) return true;
    const bool = traverse(right.next);
    let res = bool && right.val === left.val;
    left = left.next;
    return res;
  }
  return traverse(head);
};

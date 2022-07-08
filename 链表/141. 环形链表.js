/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 双指针
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
// 遍历
var hasCycle = function (head) {
  const cacheSet = new Set();
  while (head) {
    if (cacheSet.has(head.next)) {
      return true;
    } else {
      cacheSet.add(head.next);
      head = head.next;
    }
  }
  return false;
};

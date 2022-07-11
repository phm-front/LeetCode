/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 遍历思想 不能使用分解问题 
var connect = function (root) {
  if (root === null) return root;
  function tarverse(node1, node2) {
    if (node1 === null) return;
    node1.next = node2;
    tarverse(node1.left, node1.right);
    tarverse(node1.right, node2.left);
    tarverse(node2.left, node2.right);
  }
  tarverse(root.left, root.right);
  return root;
};

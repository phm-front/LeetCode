/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 一个节点的最大直径是左右子节点最大深度之和 在最大深度遍历的后序位置拿到节点的最大直径 比较所有节点的最大直径 并返回
var diameterOfBinaryTree = function (root) {
  let maxLen = 0;
  function maxDeepth(root) {
    if (root === null) return 0;
    let leftDeep = maxDeepth(root.left);
    let rightDeep = maxDeepth(root.right);
    maxLen = Math.max(leftDeep + rightDeep, maxLen);
    return Math.max(leftDeep, rightDeep) + 1;
  }
  maxDeepth(root);
  return maxLen;
};

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
 var maxPathSum = function(root) {
  if (root === null) return 0
  let res = -Infinity
  // 返回root节点单边最大路径和
  function maxSideSum(root) {
      if (root === null) return 0
      let leftMax = Math.max(0, maxSideSum(root.left))
      let rightMax = Math.max(0, maxSideSum(root.right))
      // root节点最大路径和
      let rootMax = root.val + leftMax + rightMax
      res = Math.max(res, rootMax)
      return Math.max(leftMax, rightMax) + root.val
  }
  maxSideSum(root)
  return res
};
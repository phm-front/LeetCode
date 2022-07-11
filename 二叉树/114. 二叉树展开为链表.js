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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 因为没有返回值 所有不能使用遍历 使用分解子问题
 var flatten = function(root) {
  if (root === null) return root
  // 左右子树已经拉成一个链表
  flatten(root.left)
  flatten(root.right)
  // 存储左右子树
  let left = root.left
  let right = root.right
  // 左子树赋值给root.right right接到root.right最后即可
  root.left = null
  root.right = left
  let p = root
  while(p.right !== null) {
      p = p.right
  }
  p.right = right
};

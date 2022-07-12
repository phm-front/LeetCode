/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  // 构造二叉树
  function build(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) return null;
    // 根节点value
    const rootVal = preorder[preStart];
    // 根节点在中序数组的索引
    const inRootIndex = map.get(rootVal);
    // 左子树数量
    const leftTreeNum = inRootIndex - inStart;
    const leftTree = build(
      preorder,
      preStart + 1,
      preStart + leftTreeNum,
      inorder,
      inStart,
      inRootIndex - 1
    );
    const rightTree = build(
      preorder,
      preStart + leftTreeNum + 1,
      preEnd,
      inorder,
      inRootIndex + 1,
      inEnd
    );
    return new TreeNode(rootVal, leftTree, rightTree);
  }
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

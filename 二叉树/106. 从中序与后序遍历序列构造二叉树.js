/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  function build(inorder, inStart, inEnd, postorder, poStart, poEnd) {
    if (inStart > inEnd || poStart > poEnd) return null;
    const rootVal = postorder[poEnd];
    const inRootIndex = map.get(rootVal);
    // 左子树数量
    const leftTreeNum = inRootIndex - inStart;
    const leftTree = build(
      inorder,
      inStart,
      inRootIndex - 1,
      postorder,
      poStart,
      poStart + leftTreeNum - 1
    );
    const rightTree = build(
      inorder,
      inRootIndex + 1,
      inEnd,
      postorder,
      poStart + leftTreeNum,
      poEnd - 1
    );
    return new TreeNode(rootVal, leftTree, rightTree);
  }
  return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};

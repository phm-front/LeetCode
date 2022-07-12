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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  const map = new Map();
  for (let i = 0; i < postorder.length; i++) {
    map.set(postorder[i], i);
  }
  function build(preorder, preStart, preEnd, postorder, poStart, poEnd) {
    if (preStart > preEnd || poStart > poEnd) return null;
    if (preStart === preEnd) return new TreeNode(preorder[preStart]);
    if (poStart === poEnd) return new TreeNode(postorder[poStart]);
    const rootVal = preorder[preStart];
    const rootTreeNum = map.get(preorder[preStart + 1]) - poStart + 1;
    const leftTree = build(
      preorder,
      preStart + 1,
      preStart + rootTreeNum,
      postorder,
      poStart,
      poStart + rootTreeNum - 1
    );
    const rightTree = build(
      preorder,
      preStart + rootTreeNum + 1,
      preEnd,
      postorder,
      poStart + rootTreeNum,
      poEnd - 1
    );
    return new TreeNode(rootVal, leftTree, rightTree);
  }
  return build(preorder, 0, preorder.length - 1, postorder, 0, postorder.length - 1);
};

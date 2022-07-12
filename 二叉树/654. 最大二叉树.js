/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// function build(nums, low, high) {
//     if (low > high) return null
//     let index = -1, max = Number.NEGATIVE_INFINITY
//     for (let i = low; i <= high; i++) {
//         if (nums[i] >= max) {
//             max = nums[i]
//             index = i
//         }
//     }
//     let leftTree = build(nums, low, index - 1)
//     let rightTree = build(nums, index + 1, high)
//     let root = new TreeNode(nums[index], leftTree, rightTree)
//     return root
// }
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null;
  let index = -1,
    max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= max) {
      max = nums[i];
      index = i;
    }
  }
  let leftTree = constructMaximumBinaryTree(nums.slice(0, index));
  let rightTree = constructMaximumBinaryTree(nums.slice(index + 1));
  return new TreeNode(nums[index], leftTree, rightTree);
};

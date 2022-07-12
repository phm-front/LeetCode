/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// 前序遍历
// var serialize = function (root) {
//   let arr = [];
//   function traverse(root) {
//     if (root === null) {
//       arr.push("null");
//       return;
//     }
//     arr.push(root.val);
//     traverse(root.left);
//     traverse(root.right);
//   }
//   traverse(root);
//   return arr.join(",");
// };

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// var deserialize = function (data) {
//   let nodes = data.split(",");
//   function build(nodes) {
//     if (!nodes.length) return null;
//     let firstNode = nodes.shift();
//     if (firstNode === "null") return null;
//     let root = new TreeNode(Number(firstNode));
//     root.left = build(nodes);
//     root.right = build(nodes);
//     return root;
//   }
//   return build(nodes);
// };

// 后续遍历
var serialize = function(root) {
  let arr = []
  function traverse (root) {
      if (root === null) {
          arr.push('null')
          return
      }
      traverse(root.left)
      traverse(root.right)
      arr.push(root.val)
  }
  traverse(root)
  return arr.join(',')
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  let nodes = data.split(',')
  function build(nodes) {
      if (!nodes.length) return null
      let endNode = nodes.pop()
      if (endNode === 'null') return null
      let root = new TreeNode(Number(endNode))
      // 从后往前 先处理right
      root.right = build(nodes)
      root.left = build(nodes)
      return root
  }
  return build(nodes)
};

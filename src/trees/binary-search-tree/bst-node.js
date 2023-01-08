/**
 * @class
 */
class BSTNode {
  /**
   * Creates a new BSTNode
   * @constructor
   * @param {*} value
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * Returns The Left Child
   * @returns {BSTNode}
   */
  getLeft() {
    return this.left;
  }

  /**
   * Returns The Right Child
   * @returns {BSTNode}
   */
  getRight() {
    return this.right;
  }

  /**
   * Checks if node has a left child
   * @returns {boolean}
   */
  hasLeft() {
    return this.left != null;
  }

  /**
   * Check if node has right child
   * @returns {boolean}
   */
  hasRight() {
    return this.right != null;
  }

  /**
   * Checks if node is leaf
   * @returns {boolean}
   */
  isLeaf() {
    return !this.hasLeft() && !this.hasRight();
  }

  /**
   * Adds a left Child
   * @param {BSTNode} node
   */
  setLeft(node) {
    this.left = node;
  }

  /**
   * Adds a Right Child
   * @param {BSTNode} node
   */
  setRight(node) {
    this.right = node;
  }
}

module.exports = BSTNode;

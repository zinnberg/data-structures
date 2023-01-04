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

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  hasLeft() {
    return this.left != null;
  }

  hasRight() {
    return this.right != null;
  }

  isLeaf() {
    return !this.hasLeft() && !this.hasRight();
  }
}

module.exports = BSTNode;

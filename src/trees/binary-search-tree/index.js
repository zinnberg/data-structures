const BSTNode = require('./bst-node');

const Comparator = require('../../comparator');

const {
  noop,
} = require('../../utils');

/**
 * @class
 */
class BinarySearchTree {
  /**
   * Creates a new BinarySearchTree
   * @constructor
   * @param {*} compareFn
   */
  constructor(compareFn) {
    this.rootNode = null;
    this.comparator = new Comparator(compareFn);
  }

  /**
   * Inserts a new node into the binary tree
   * @param {*} value
   * @returns {BinarySearchTree}
   */
  insert(value) {
    const insertNode = new BSTNode(value);
    const insertHelper = (root) => {
      if (this.comparator.isGreaterThan(root.value, insertNode.value)) {
        if (root.hasLeft()) {
          insertHelper(root.left);
        } else {
          root.left = insertNode;
        }
      } else if (root.hasRight()) {
        insertHelper(root.right);
      } else {
        root.right = insertNode;
      }
    };

    if (this.rootNode === null) {
      this.rootNode = insertNode;
      return this;
    }

    insertHelper(this.rootNode);
    return this;
  }

  /**
   * Finds the largest element in the BST
   * @returns {*} - If the tree is not empty returns the largest element, otherwise returns null
   */
  max() {
    const maxHelper = (root) => {
      if (root === null) {
        return null;
      }

      if (root.right === null) {
        return maxHelper(root.right);
      }

      return root.key;
    };

    return maxHelper(this.rootNode);
  }

  /**
   * Finds the smallest element in the BST
   * @param {*} startNode
   * @returns
   */
  min(startNode = this.root) {
    if (startNode === null) {
      return null;
    }

    if (startNode.hasLeft()) {
      return this.min(startNode.left);
    }

    return startNode.value;
  }

  /**
   * Outputs values of node in Pre-Order
   * @param {*} callback
   * @returns {BinarySearchTree}
   */
  preOrder(callback) {
    const cb = callback || noop;
    const preOrderHelper = (root) => {
      if (root == null) {
        return;
      }

      cb(root.value);
      preOrderHelper(root.left);
      preOrderHelper(root.right);
    };

    preOrderHelper(this.rootNode);
    return this;
  }

  /**
   * Outputs node values in Post-Order
   * @param {*} callback
   * @returns {BinarySearchTree}
   */
  postOrder(callback) {
    const cb = callback || noop;
    const postOrderHelper = (root) => {
      postOrderHelper(root.left);
      postOrderHelper(root.right);
      cb(root.value);
    };

    postOrderHelper(this.rootNode);
    return this;
  }

  /**
   * Returns the height of the tree
   * @returns {number}
   */
  height() {
    const heightHelper = (root) => {
      if (root === null) {
        return -1;
      }

      const leftHeight = heightHelper(root.left);
      const rightHeight = heightHelper(root.right);

      if (leftHeight > rightHeight) {
        return leftHeight + 1;
      }

      return rightHeight + 1;
    };

    return heightHelper(this.rootNode);
  }

  /**
   * Outputs node values in order
   * @param {*} callback
   * @returns {BinarySearchTree}
   */
  inOrder(callback) {
    const cb = callback || noop;
    const inOrderHelper = (root) => {
      if (root === null) {
        return;
      }

      inOrderHelper(root.left);
      cb(root.value);
      inOrderHelper(root.right);
    };

    inOrderHelper(this.rootNode);
    return this;
  }

  /**
   * Outputs node values in level order
   * @param {*} callback
   * @returns {BinarySearchTree}
   */
  levelOrder(callback) {
    const cb = callback || noop;
    const height = this.height();

    const printLevel = (root, level) => {
      if (root === null) {
        return;
      }

      if (level === 1) {
        cb(root.value);
      }
    };

    for (let i = 1; i <= height; i += 1) {
      printLevel(this.rootNode, i);
    }

    return this;
  }

  /**
   * Removes an element from a BST
   * @param {*} value
   * @returns {BinarySearchTree}
   */
  remove(value) {
    const removeHelper = (root, val) => {
      let node = root;
      if (node === null) {
        return null;
      }

      if (this.comparator.isLessThan(val, node.value)) {
        node.left = removeHelper(node.left, val);
        return node;
      }

      if (this.comparator.isGreaterThan(val, node.value)) {
        node.right = removeHelper(node.right, val);
        return node;
      }

      if (node.isLeaf()) {
        node = null;
        return node;
      }

      if (!node.hasRight()) {
        node = node.left;
        return node;
      }

      if (!node.hasLeft()) {
        node = node.right;
        return node;
      }

      node.value = this.min(node.right);
      node.right = this.removeHelper(node.right, node.value);
      return node;
    };

    this.rootNode = removeHelper(this.rootNode, value);
    return this;
  }
}

module.exports = BinarySearchTree;

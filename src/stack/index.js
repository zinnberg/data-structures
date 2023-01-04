const SinglyLinkedList = require('../linked-lists/singly-linked-list');

/**
 * @class
 */
class Stack {
  /**
   * Creates a New Stack
   * @constructor
   */
  constructor() {
    this.list = new SinglyLinkedList();
  }

  /**
   * Checks to see if the stack is empty
   * @returns {Boolean}
   */
  isEmpty() {
    return this.list.size() === 0;
  }

  /**
   * Retrives the first element in the stack but does not remove it
   * @returns {*}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.list.get(0);
  }

  /**
   * Removes and returns the value at the top of the stack
   * @returns {*}
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error('Empty Stack');
    }

    const value = this.list.get(0);
    this.list.removeAt(0);
    return value;
  }

  /**
   * Adds a new value to the top of the stack
   * @param {*} value
   * @returns
   */
  push(value) {
    this.list.prepend(value);
    return this;
  }
}

module.exports = Stack;

const SinglyLinkedList = require('../linked-lists/singly-linked-list');
/**
 * @class
 */
class Queue {
  /**
   * Create a new Queue
   * @constructor
   */
  constructor() {
    this.list = new SinglyLinkedList();
  }

  /**
   * Checks to see if the queue is empty
   * @returns {Boolean}
   */
  isEmpty() {
    return this.list.size() === 0;
  }

  /**
   * Adds item to frond of queue
   * @param {*} value
   * @returns
   */
  enqueue(value) {
    this.list.append(value);
    return this;
  }

  /**
   * Removes first item from the queue
   * @returns
   */
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Empty Queue');
    }

    const value = this.list.get(0);

    this.list.removeAt(0);
    return value;
  }
}

module.exports = Queue;

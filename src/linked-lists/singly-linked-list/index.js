const Comparator = require('../../comparator');
const ListNode = require('./list-node');

const head = Symbol('Symbol For Private Variable Head');
const size = Symbol('Symbol For Private Variable Size');

/**
 * @class
 */
class SinglyLinkedList {
  /**
   * Creates a SinglyLinkedList
   * @constructor
  */
  constructor(isEqual) {
    this[head] = null;
    this[size] = 0;
    this.comparator = new Comparator(isEqual);
  }

  /**
   * Inserts a value at the end of the list.
   * @public
   * @param {*} value - The value you want to append
   * @returns {SinglyLinkedList}
   */
  append(value) {
    const insertNode = new ListNode(value);
    let currentNode = this[head];
    if (this[head] === null) {
      this[head] = insertNode;
      this[size] += 1;
      return this;
    }

    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }

    currentNode.next = insertNode;
    this[size] += 1;

    return this;
  }

  /**
   * Removes every node in the list
   * @public
   */
  clear() {
    this[head] = null;
    this[size] = 0;
  }

  /**
   * Checks if the list contains the value.
   * @public
   * @param {*} value
   * @returns {boolean}
   */
  contains(value) {
    return this.indexOf(value) !== -1;
  }

  /**
   * Returns the element at the specific index
   * @public
   * @param {*} index
   * @returns {*}
   */
  get(index) {
    let currentNode = this[head];

    if (index < 0 || index >= this[size]) {
      throw new Error('Index out of bounds');
    }

    for (let i = index; i > 0; i -= 1) {
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }

  /**
   * Searches the list for a given value.
   * If found returns the index of the element. Otherwise returns -1.
   * @public
   * @param {*} value
   * @returns {number} If the element is found returns the index, and -1 if it's not found.
   */
  indexOf(value) {
    let currentNode = this[head];
    let index = 0;

    if (currentNode === null) {
      return -1;
    }

    while (
      this.comparator.isEqual(currentNode.value, value) !== true
      && index <= this.size()
    ) {
      index += 1;
      currentNode = currentNode.next;
    }

    if (this.comparator.isEqual(currentNode.value, value)) {
      return index;
    }

    return -1;
  }

  /**
   * Inserts a value at the specified position
   * @public
   * @param {*} position
   * @param {*} value
   * @returns {SinglyLinkedList}
   */
  insert(position, value) {
    const insertNode = new ListNode(value);
    let currentNode = this[head];

    if (position === 0) {
      this[head] = insertNode;
      this[head].next = currentNode;
      this[size] += 1;
      return this;
    }

    if (position > this[size] + 1) {
      return this;
    }

    for (let i = 0; i < (position - 1); i += 1) {
      currentNode = currentNode.next;
    }

    insertNode.next = currentNode.next;
    currentNode.next = insertNode;
    this[size] += 1;

    return this;
  }

  /**
   * Inserts a value at the front of the list
   * @public
   * @param {*} value
   * @returns {SinglyLinkedList}
   */
  prepend(value) {
    const insertNode = new ListNode(value);

    if (this[head] === null) {
      this[head] = insertNode;
    } else {
      insertNode.next = this[head];
      this[head] = insertNode;
    }

    this[size] += 1;
    return this;
  }

  /**
   * Removes element by value
   * @public
   * @param {*} value
   * @returns {SinglyLinkedList}
   */
  remove(value) {
    let currentNode = this[head];

    if (currentNode !== null && this.comparator.isEqual(value, currentNode.value)) {
      this[size] -= 1;
      this[head] = currentNode.next;
      return this;
    }

    while (currentNode.next !== null && !this.comparator.isEqual(currentNode.next.value, value)) {
      currentNode = currentNode.next;
    }

    if (currentNode.next === null) {
      return this;
    }

    currentNode.next = currentNode.next.next;
    this[size] -= 1;

    return this;
  }

  /**
   * Removes element at a specific index
   * @param {*} index
   * @returns {SinglyLinkedList}
   */
  removeAt(index) {
    let currentNode = this[head];
    let previous = currentNode;

    if (index > this[size] - 1 || index < 0) {
      throw new Error('Out of bounds');
    }

    if (index === 0) {
      this[size] -= 1;
      this[head] = currentNode.next;
      return this;
    }

    for (let i = 0; i < (index - 1); i += 1) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    previous.next = currentNode.next;
    this[size] -= 1;

    return this;
  }

  /**
   * Returns the size of the linked list
   * @public
   * @returns {number}
   */
  size() {
    return this[size];
  }
}

module.exports = SinglyLinkedList;

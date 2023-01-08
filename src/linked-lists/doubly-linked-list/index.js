const Comparator = require('../../comparator');
const ListNode = require('./double-list-node');

const head = Symbol('Symbol For Private Variable Head');
const size = Symbol('Symbol For Private Variable Size');
const tail = Symbol('Doubly Linked List Tail');

/**
 * @class
 */
class DoublyLinkedList {
  /**
     * Instantiates a new DoublyLinkedList
     * @constructor
     */
  constructor(isEqual) {
    this[size] = 0;
    this[tail] = null;
    this[head] = null;
    this.comparator = new Comparator(isEqual);
  }

  /**
     * Adds an element to the end of the list
     * @param {*} value
     * @returns {DoublyLinkedList}
     */
  append(value) {
    const newNode = new ListNode(value);
    newNode.previous = this[tail];
    this[tail] = newNode;

    if (this.size() === 0) {
      this[head] = newNode;
      this[size] += 1;
      return this;
    }

    newNode.previous.next = newNode;
    this[size] += 1;

    return this;
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
   * Removes all elements from the list
   * @returns {DoublyLinkedList}
   */
  clear() {
    this[size] = 0;
    this[tail] = null;
    this[head] = null;
    return this;
  }

  /**
     * Returns the element at the specific index
     * @public
     * @param {number} index
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
     * Retrives the first element in the list
     * @returns {*}
     */
  head() {
    return this.size === 0 ? null : this[head].value;
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
     * Returns the element at the specific position in the list
     * @param {number} position
     * @param {*} value
     * @returns {DoublyLinkedList}
     */
  insert(position, value) {
    if (position < 0 || position > this.size()) {
      throw new Error('Out of Bounds');
    }

    const newNode = new ListNode(value);
    let currentNode = this[head];

    if (position === 0) {
      return this.prepend(value);
    }

    if (position === this.size()) {
      return this.append(value);
    }

    for (let i = 0; i < (position - 1); i += 1) {
      currentNode = currentNode.next;
    }

    newNode.previous = currentNode;
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    newNode.next.previous = newNode;

    this[size] += 1;

    return this;
  }

  /**
     * Adds an element to the front of the list
     * @param {*} value
     * @returns {DoublyLinkedList}
     */
  prepend(value) {
    const newNode = new ListNode(value);

    newNode.next = this[head];
    this[head] = newNode;

    if (this[tail] === null) {
      this[tail] = newNode;
    }

    this[size] += 1;

    return this;
  }

  /**
     * Returns the size of the list
     * @returns {number}
     */
  size() {
    return this[size];
  }

  /**
     * Retreives the last element in the list
     * @returns {*}
     */
  tail() {
    return this.size === 0 ? null : this[tail].value;
  }
}

module.exports = DoublyLinkedList;

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
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * Removes the first instance of a specific value from the list
   * @public
   * @param {*} value
   * @returns {DoublyLinkedList}
   */
  remove(value) {
    const valueIndex = this.indexOf(value);
    if (valueIndex === -1) {
      return this;
    }

    return this.removeAt(valueIndex);
  }

  /**
   * Removes element at specific index
   * @public
   * @param {*} index
   * @returns {DoublyLinkedList}
   */
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error('Out of Bounds');
    }

    if (index === 0) {
      return this.removeHead();
    }

    if (index === this.size() - 1) {
      return this.removeTail();
    }

    let currentNode = this[head];

    for (let i = 0; i < (index - 1); i += 1) {
      currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;
    currentNode.next.previous = currentNode;
    this[size] -= 1;
    return this;
  }

  /**
   * Remove the head of the list
   * @public
   * @returns {DoublyLinkedList}
   */
  removeHead() {
    if (this.size() === 0) {
      return this;
    }

    if (this.size() === 1) {
      this[head] = null;
      this[tail] = null;
      this[size] -= 1;
      return this;
    }

    this[head] = this[head].next;
    this[head].previous = null;
    this[size] -= 1;
    return this;
  }

  /**
   * Removes the tail of the list
   * @public
   * @returns {DoublyLinkedList}
   */
  removeTail() {
    if (this.size() === 0) {
      return this;
    }

    if (this.size() === 1) {
      this[head] = null;
      this[tail] = null;
      this[size] -= 1;
      return this;
    }

    this[tail] = this[tail].previous;
    this[tail].next = null;
    this[size] -= 1;
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

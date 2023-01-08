/**
 * @class
 */
class DoubleListNode {
  /**
   * Creates a List Node
   * @contstructor
   * @param {*} value
   */
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

module.exports = DoubleListNode;

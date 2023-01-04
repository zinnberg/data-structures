class Comparator {
  static defaultComparator(a, b) {
    if (a === b) {
      return 0;
    }

    return a > b ? 1 : -1;
  }

  constructor(customComparator) {
    this.compareFn = customComparator || Comparator.defaultComparator;
  }

  isEqual(a, b) {
    return this.compareFn(a, b) === 0;
  }

  isLessThan(a, b) {
    return this.compareFn(a, b) === -1;
  }

  isGreaterThan(a, b) {
    return this.compareFn(a, b) === 1;
  }

  isGreaterThanOrEqual(a, b) {
    return this.isEqual(a, b) || this.isGreaterThan(a, b);
  }

  isLessThanOrEqual(a, b) {
    return this.isEqual(a, b) || this.isLessThan(a, b);
  }
}

module.exports = Comparator;

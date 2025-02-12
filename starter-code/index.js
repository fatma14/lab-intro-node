class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => {
      return a - b;
    });
  }
  get(pos) {
    if (pos <= this.length) {
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }
  sum() {
    if (this.length === 0) {
      return 0;
    }
    const sum = this.items.reduce((counter, item) => {
      return counter + item;
    }, 0);
    return sum;
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;

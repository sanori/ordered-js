'use strict';

function lowerBound(array, target) {
  let lo = 0, hi = array.length;
  while (lo < hi) {
    const mi = (lo + hi) >> 1;
    if (array[mi] < target) {
      lo = mi + 1;
    } else {
      hi = mi;
    }
  }
  return hi;
}

function OrderedSet(arr) {
  if (arr instanceof Array) {
    this.array = arr.slice();
    this.array.sort();
  } else if (arr === undefined) {
    this.array = [];
  } else {
    throw new TypeError('arr must be an Array');
  }
}

OrderedSet.prototype = {
  add(e) {
    const idx = lowerBound(this.array, e);
    if (this.array[idx] !== e) {
      this.array.splice(idx, 0, e);
    }
    return this;
  },
  clear() {
    this.array = [];
  },
  delete(e) {
    const idx = lowerBound(this.array, e);
    if (this.array[idx] === e) {
      this.array.splice(idx, 1);
      return true;
    }
    return false;
  },
  has(e) {
    const idx = lowerBound(this.array, e);
    return this.array[idx] === e;
  },
  get size() {
    return this.array.length;
  },
};

module.exports = OrderedSet;

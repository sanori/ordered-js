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

function OrderedMap(arr) {
  if (arr instanceof Array) {
    this.array = arr.map(x => x[0]);
    this.array.sort();
    this.map = new Map(arr);
  } else if (!arr) {
    this.array = [];
    this.map = new Map();
  } else {
    throw new TypeError('arr must be an Array');
  }
}

OrderedMap.prototype = {
  set(k, v) {
    const idx = lowerBound(this.array, k);
    if (this.array[idx] !== k) {
      this.array.splice(idx, 0, k);
    }
    this.map.set(k, v);
    return this;
  },
  clear() {
    this.array = [];
    this.map.clear();
  },
  delete(k) {
    const idx = lowerBound(this.array, k);
    if (this.array[idx] === k) {
      this.array.splice(idx, 1);
      this.map.delete(k);
      return true;
    }
    return false;
  },
  has(k) {
    return this.map.has(k);
  },
  get(k) {
    return this.map.get(k);
  },
  get size() {
    return this.array.length;
  },
  forEach(fn) {
    this.array.forEach((k) => fn(this.map.get(k), k, this));
  }
};

module.exports = OrderedMap;

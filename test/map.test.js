'use strict';
const Map = require('../ordered-map');

// ECMAScript Map API test

describe('Map', () => {
  test('Basic functionality', () => {
    var key = {};
    var map = new Map();

    map.set(key, 123);

    expect(map.has(key)).toBeTruthy();
    expect(map.get(key)).toEqual(123);
  });

  test('Constructor arguments', () => {
    var key1 = {};
    var key2 = {};
    var map = new Map([[key1, 123], [key2, 456]]);

    expect(map.has(key1)).toBeTruthy();
    expect(map.get(key1)).toEqual(123);
    expect(map.has(key2)).toBeTruthy();
    expect(map.get(key2)).toEqual(456);
  });

  test('constructor requires new', () => {
    expect(() => new Map()).not.toThrow();
    expect(() => Map()).toThrow();
  });

  test('constructor accepts null', () => {
    expect(() => new Map(null)).not.toThrow();
  });

  test('OrderedMap.prototype.set returns this', () => {
    var map = new Map();
    expect(map.set(0, 0)).toBe(map);
  });

  test.skip('-0 key converts to +0', () => {
    var map = new Map();
    map.set(-0, "foo");
    var k;
    map.forEach(function (value, key) {
      k = 1 / key;
    });
    expect(k).toEqual(Infinity);
    expect(map.get(+0)).toEqual("foo");
  });

  test('OrderedMap.prototype.size', () => {
    var key = {};
    var map = new Map();

    map.set(key, 123);

    expect(map.size).toEqual(1);
  });

  test.todo('OrderedMap.prototype.delete');
  test.todo('OrderedMap.prototype.clear');
  test.todo('OrderedMap.prototype.forEach');
  test.todo('OrderedMap.prototype.keys');
  test.todo('OrderedMap.prototype.values');
  test.todo('OrderedMap.prototype.entries');
});

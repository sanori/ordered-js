# Ordered Set in JavaScript

JavaScript implementation of ordered set depending on the efficient implementation of `Array.prototype.splice()`.

The [`Set` object in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) is an implementation of an *unordered* set that does not keep the order of its elements.

The API of this implementation is similar to the JavaScript Set object.
It also keeps the set elements in a sorted array.


## Motivations

1. Efficiently implemented ordered sets and their variants are handy for some coding problems in programming contests for me.
But, JavaScript does not provide such a data structure by default.
<br>For example, the `set` type in the standard C++ library preserves the ordering of elements of a set.
So, getting the first or last element of a mutable set is easy and efficient.
In detail, the set type takes $O(\log n)$ time to add or remove an element and to get the first or last element since it is implemented as a balanced binary search tree such as the Red-black tree.

2. Modern JavaScript engines optimized Array operations well.
<br>For example, `Array.prototype.splice` would be fast enough for a small-size array though its time complexity would be $O(n)$.


## Ordered Set/Map in Other Programming Languages
- C++: [set](https://cplusplus.com/reference/set/set/), [map](https://cplusplus.com/reference/map/map/), [multiset](https://cplusplus.com/reference/set/multiset/)
- Java: [TreeSet](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/TreeSet.html), [TreeMap](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/TreeMap.html)
- Python ([sortedcontainers](https://grantjenks.com/docs/sortedcontainers/)): [SortedSet](https://grantjenks.com/docs/sortedcontainers/sortedset.html), [SortedDict](https://grantjenks.com/docs/sortedcontainers/sortedset.html), [SortedList](https://grantjenks.com/docs/sortedcontainers/sortedset.html)

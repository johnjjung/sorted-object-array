# Sorted Array #

An Implements insertion sort and binary search of JavaScript objects for fast insertion and deletion.

## Installation ##

Sorted arrays may be installed on [node.js](http://nodejs.org/ "node.js") via the [node package manager](https://npmjs.org/ "npm") using the command `npm install sorted-object-array`.

## Usage ##

The six line tutorial on sorted object arrays:

```javascript
var SortedObjectArray = require("sorted-object-array");
var sorted = new SortedObjectArray('k', {k:1, v:''}, {k:2, v:''}, {k:3, v:''}, {k:4, v:''}, {k:5, v:''});
console.dir(sorted.array);                   // [{k:1, v:''}, {k:2, v:''}, {k:3, v:''}, {k:4, v:''}, {k:5, v:''}]
sorted.search(3);                            // 2
sorted.search({k:3});                        // 2
sorted.remove(3);                            // [{k:1, v:''}, {k:2, v:''}, {k:4, v:''}, {k:5, v:''}]
sorted.insert({k:3,v:'x'});                  // [{k:1, v:''}, {k:2, v:''}, {k:3, v:'x'}, {k:4, v:''}, {k:5, v:''}]
```

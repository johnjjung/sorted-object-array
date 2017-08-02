var SortedObjectArray = require("./lib/sorted-object-array");

var s = new SortedObjectArray();

console.log(s);

//var sorted = new SortedObjectArray('k', {k:1, value:'v'}, {k:2, value:'v'}, {k:3, value:'v'}, {k:4, value:'v'}, {k:5, value:'v'});
//console.dir(sorted.array);                   // [1, 2, 3, 4, 5]
//console.log(sorted.search(3));                            // 2
//console.log(sorted.remove(3));                            // [1, 2, 4, 5]
//console.log(sorted.insert({k:3, v:1}));                            // [1, 2, 3, 4, 5]
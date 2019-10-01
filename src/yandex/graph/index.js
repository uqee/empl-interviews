'use strict';
var Graph = require('./Graph');
var look = require('./' + (process.argv[2] || 'breadth'));
var size = Math.round(process.argv[3]) || 10;

//look(new Graph(size)).print();

///*
console.time('1000 iterations');
for (var i = 0; i < 1000; i++) look(new Graph(size));
console.timeEnd('1000 iterations');
//*/

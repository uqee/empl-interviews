'use strict';
var RandomArray = require('./RandomArray');
var sort = require('./' + (process.argv[2] || 'quick'));
var len = Math.round(process.argv[3]) || 1000;

console.time('1000 iterations');
for (var i = 0; i < 1000; i++) sort(new RandomArray(len));
console.timeEnd('1000 iterations');

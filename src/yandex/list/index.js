'use strict';
var list = require('./list');
var action = require('./' + (process.argv[2] || 'reverse'));
var len = Math.round(process.argv[3]) || 30;

var list1 = list(len);
list1.print();

var list2 = action(list1);
list2.print();

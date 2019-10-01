'use strict';

function Node (index, next) {
  this.i = index;
  this.next = next || null;
}

Node.prototype.array = function () {
  var node = this;
  var array = [];
  do {
    array.push(node.i);
    node = node.next;
  } while (node);
  return array;
};

Node.prototype.print = function () {
  console.log.apply(console, this.array());
};

module.exports = function (size) {
  var first, curr, last;
  for (var i = 0; i < size; i++) {
    curr = new Node(i);
    if (!first) first = curr;
    if (last) last.next = curr;
    last = curr;
  }
  return first;
};

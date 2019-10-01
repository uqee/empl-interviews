'use strict';

function reverse (start) {
  var prev, next, curr = start;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

module.exports = reverse;

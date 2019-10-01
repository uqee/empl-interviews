'use strict';

function split (arr) {
  var i = Math.floor(arr.length / 2);
  return [
    arr.slice(0, i),
    arr.slice(i, arr.length)
  ];
}

function merge (a, b) {
  var res = [];

  while (a.length && b.length) {
    if (a[0] < b[0]) res.push(a.shift());
    else res.push(b.shift());
  }

  if (a.length) res.push.apply(res, a);
  else if (b.length) res.push.apply(res, b);

  return res;
}

function sort (arr) {
  if (arr.length <= 1) return arr;
  else {
    var slices = split(arr);
    var a = sort(slices[0]);
    var b = sort(slices[1]);
    return merge(a, b);
  }
}

module.exports = function (arr) {
  var sorted = sort(arr);
  return arr.copy(sorted);
};

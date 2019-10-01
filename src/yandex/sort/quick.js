'use strict';

function partition (arr, lo, hi) {
  var i = lo;
  var pi = hi;
  var pv = arr[hi];
  while (i < pi) {
    if (arr[i] < pv) i++;
    else {
      arr.swap(i, pi - 1);
      arr.swap(pi - 1, pi);
      pi--;
    }
  }
  return pi;
}

function sort (arr, lo, hi) {
  if (lo < hi) {
    var p = partition(arr, lo, hi);
    sort(arr, lo, p - 1);
    sort(arr, p + 1, hi);
  }
}

module.exports = function (arr) {
  sort(arr, 0, arr.length - 1);
  return arr;
};

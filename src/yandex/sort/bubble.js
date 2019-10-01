'use strict';

function sort (arr) {
  for (var hi = arr.length - 1; hi > 0; hi--) {
    for (var i = 0; i < hi; i++) {
      if (arr[i] > arr[i + 1]) arr.swap(i, i + 1);
    }
  }
}

module.exports = function (arr) {
  sort(arr);
  return arr;
};

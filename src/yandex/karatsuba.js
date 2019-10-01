'use strict';
var MAX = 1e10;
var TRESHOLD = 1e3;

function random (max) {
  return Math.round(Math.random() * max);
}

function mult (x, y) {
  if (x < TRESHOLD && y < TRESHOLD) return (x * y);
  else {
    var n = Math.log(Math.min(x, y)) / Math.log(10);
    var m = Math.floor(n / 2);
    var bm = Math.pow(10, m);

    var x1 = Math.floor(x / bm);
    var x0 = x % bm;

    var y1 = Math.floor(y / bm);
    var y0 = y % bm;

    var z0 = mult(x0, y0);
    var z2 = mult(x1, y1);
    var z1 = mult(x1 + x0, y1 + y0) - z2 - z0;

    return (z2 * bm * bm + z1 * bm + z0);
  }
}

var a = random(MAX);
var b = random(MAX);
console.log(a + ' * ' + b + ' = ' + mult(a, b) + ' // ' + (a * b));

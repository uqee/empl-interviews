'use strict';

function RandomArray (length) {
  for (var i = 0; i < length; i++) {
    this.push(Math.round(Math.random() * length));
  }
}

RandomArray.prototype = Object.create(Array.prototype);
RandomArray.prototype.constructor = RandomArray;

RandomArray.prototype.copy = function (arr) {
  var i = arr.length;
  while (--i >= 0) this[i] = arr[i];
  return this;
};

RandomArray.prototype.print = function () {
  if (this.length < 40) console.log(this.join(','));
  return this;
};

RandomArray.prototype.swap = function (i, j) {
  var val = this[i];
  this[i] = this[j];
  this[j] = val;
  return this;
};

module.exports = RandomArray;

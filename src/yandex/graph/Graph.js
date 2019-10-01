'use strict';
var DENSITY = 0.15;

function Graph (size) {
  var i, j;
  var edge, edgescount;

  // generate vertices
  for (i = 0; i < size; i++) this.push([]);

  // generate edges
  for (i = 0; i < size; i++) {
    edgescount = Math.floor(Math.random() * size * DENSITY);
    for (edge = 0; edge < edgescount; edge++) {
      j = Math.floor(Math.random() * size);
      if (j !== i) {
        if (this[i].indexOf(j) === -1) this[i].push(j);
        if (this[j].indexOf(i) === -1) this[j].push(i);
      }
    }
  }

  // sort edges
  for (i = 0; i < size; i++)
    this[i].sort(function (a, b) {
      return (a - b);
    });
}

Graph.prototype = Object.create(Array.prototype);
Graph.prototype.constructor = Graph;

Graph.prototype.print = function () {
  console.log(this);
  return this;
};

module.exports = Graph;

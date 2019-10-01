'use strict';
var SIZE = 5;
var towers = [ [], [], [] ];
for (var i = 0; i < SIZE; i++) towers[0].push(i);

function swap (source, target) {
  var piece = source.shift();
  if (!target.length || piece < target[0]) target.unshift(piece);
  else process.exit(1);
  console.log(towers);
}

function move (source, target, buffer, count) {
  if (count === 1) swap(source, target);
  else {
    move(source, buffer, target, count - 1);
    swap(source, target);
    move(buffer, target, source, count - 1);
  }
}

move(towers[0], towers[1], towers[2], SIZE);

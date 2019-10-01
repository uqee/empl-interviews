'use strict';
var MAX = 1000;

function random (max) {
  return Math.round(Math.random() * max);
}

function gcd (min, max) {
  var guess = max % min;
  if (min % guess === 0) return guess;
  else return gcd(guess, min);
}

var a = random(MAX);
var b = random(MAX);
console.log('(' + a + ', ' + b + ') -> ' + gcd(Math.min(a, b), Math.max(a, b)));

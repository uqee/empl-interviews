'use strict';

function init (size, value) {
  var a = [];
  for (var i = 0; i < size; i++) {
    a.push(value !== undefined ? value : Math.round(Math.random() * size));
  }
  return a;
}

var size = 10;
var arr = init(size);
var dp = init(size, 1);
var trace = init(size, null);

for (var i = 0; i < size; i++) {
  for (var j = 0; j < i; j++) {
    if (arr[j] < arr[i] && dp[i] < dp[j] + 1) {
      dp[i] = dp[j] + 1;
      trace[i] = j;
    }
  }
}

var ans = [];
var maxv = 0, maxi = 0;
for (i = 0; i < size; i++) {
  if (dp[i] > maxv) {
    maxv = dp[i];
    maxi = i;
  }
}

while (maxi) {
  ans.unshift(arr[maxi]);
  maxi = trace[maxi];
}

console.log(arr);
console.log(dp);
console.log(trace);
console.log(ans);

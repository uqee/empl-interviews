'use strict';

function look (graph, component, queue) {
  var vertex, i;
  while (queue.length) {
    vertex = graph[queue.shift()];
    vertex.component = component;
    for (i = 0; i < vertex.length; i++) {
      if (!graph[vertex[i]].component) queue.push(vertex[i]);
    }
  }
}

function check (graph) {
  for (var i = 0; i < graph.length; i++) {
    if (!graph[i].component) return i;
  }
  return null;
}

module.exports = function (graph) {
  var start = 0;
  var component = 1;
  do {
    look(graph, component, [start]);
    start = check(graph);
    component++;
  } while (start);
  return graph;
};

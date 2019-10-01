'use strict';

function look (graph, component, index) {
  var vertex = graph[index];
  if (!vertex.component) {
    vertex.component = component;
    for (var i = 0; i < vertex.length; i++) {
      look(graph, component, vertex[i]);
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
    look(graph, component, start);
    start = check(graph);
    component++;
  } while (start);
  return graph;
};

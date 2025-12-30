import Graph from "./graph.js";

/*

a → b → d
↓
c → e

*/

/* 
// Directed Acyclic Graph for Topoloical sort  

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: [],
  e: []
};

*/

const graph = {
  a: ["b", "c"],
  b: ["a", "d"],
  c: ["a", "e"],
  d: ["b"],
  e: ["c"]
};

let g=new Graph();

// g.bfs(graph,'a');

g.dfs(graph,'a');
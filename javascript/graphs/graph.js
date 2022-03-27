// Used to represent real world relationships
// Friends, product recomendations, maps

// Types
// Directed restricts bidirectional movement through all or part of the graph
// Weighted assigns a priority value or "weight" to each vertex
// Cyclic graphs have at least a portion that allows cyclic motion

// Pros
// Relationships

// Cons
// Achieving scalability is a challenge

// Implementing Graphs

// Edge List - lists each vertex connection in the graph as tuples
// This graph is undirected, unweighted, and cyclical
const edge_list = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List - uses the indices of the array to represent each vertex, and lists each vertex that it is connected to
// This is the same as the graph above
const adjacent_list = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix
const adjacent_matrix = [
  // i.e. vertex 0 is connected to vertex 2, etc
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

//////////////////////////////////////////////////

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = '';
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + ' ';
      }
      console.log(node + '-->' + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();

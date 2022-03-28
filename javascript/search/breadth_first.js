// Uses more memory than DFS because it is necessary to track all the child nodes of the nodes in a given level, while searching that level

// BFS vs DFS
//
// Same time complexity - both visit the same number of nodes in a given tree
//
// BFS
// Best for finding shortest path/searching closer nodes (upper level), but requires more memory
//
// DFS
// Requires less memory, great if you think target node is further down the tree
// Good for when asking the question "does a path exist?" between two nodes
// It can get slow
// Not great at finding slowest path

// Implementation
// See Binary Search Tree

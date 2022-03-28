// Uses less memory than BFS because it is not necessary to store all the child pointers at each level.

// InOrder
// All the way down one end, zig-zag across to return values "in order"

// PreOrder
// maintains an order that is particularly useful if wanting to recreate the tree

// PostOrder
// Going down one side, retrieving all values level-by-level until back to the top, then repeating on the other side
//
// Implementation
// See Binary Search Tree

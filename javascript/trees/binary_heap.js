// Lookup O(n)
// Insert O(log n)
// Delete O(log n)

// Pro
// Great at comparative operations, i.e. "I want a value over 33"

// Used in
// Data storage, sorting algorithms, priority queues
// Any algorithm where ordering is important

// NOT related to memory heap

// Vs. Binary Search Tree
// No order from left to right
// The only order that matters is that each level going down, will not contain a value greater than the level(s) above (max heap), or vice versa (min heap)
// Insertion is done left to right, with bubbling up to maintain priority
// Thus there is no concept of an unbalnaced binary heap
// This is memory-efficient

// Pros
// Better than O(n)
// Priority
// Flexible Size
// Fast Insert (instances of bubbling will slow down)

// Cons
// Slow lookup

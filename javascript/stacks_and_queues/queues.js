// Lookup - O(n)
// Enqueue - O(1)
// Dequeue - O(1)
// Peek - O(1)

// Pros
// Fast Operations
// Fast Peek
// Ordered

// Cons
// Slow Lookup

// Ideally implemented with a linked list
// Array's unshifting is way too expensive of an operation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    const dequeuedNode = this.first;
    this.first = dequeuedNode.next;
    dequeuedNode.next = null;
    this.length--;
    return dequeuedNode;
  }
}

const myQueue = new Queue();
console.log(myQueue.peek());
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);

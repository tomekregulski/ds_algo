// Lookup - O(n)
// Pop - O(1)
// Push - O(1)
// Peek - O(1)

// Pros
// Fast Operations
// Fast Peek
// Ordered

// Cons
// Slow Lookup

// Can be built from both arrays or linked lists
// Have to think about which operations are important to perform, as well as other priorities you may have

// Linked List Implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.length === 0) return undefined;
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const poppedNode = this.top;
    this.top = this.top.next;
    poppedNode.next = null;
    this.length--;
    return poppedNode;
  }
}

const myStack = new Stack();
console.log(myStack.peek());
myStack.push(6);
myStack.push(7);
myStack.push(8);
console.log(myStack.peek());
myStack.pop();
console.log(myStack);

// Array Implementation
class ArrayStack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
  }
  pop() {
    this.array.pop();
  }
}

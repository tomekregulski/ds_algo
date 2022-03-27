// Prepend O(1)
// Append O(1)
// Lookup O(n)
// Insert O(n)
// Delete O(n)

// Upside - can traverse in both directions
// Downside - each node takes up more space in memory

// Single vs Double
// Single is simpler to implement, requires less memory, and operations are slightly fast due to not having to deal with thee prev property
// Single can only be traversed in one direction. Additionally, if the head node is ever lost, the list can potentially be lost forever
// Slingly is better if memory optimization is a priority with fast insertion and deletion being important
// Doubly allows traversal in both directions, and easy access to nodes on both sides of a current node
// If memory limitation is not a concern, Doubly is a more robust solution

class Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    // if (index > this.length - 1) {
    //   return;
    // }

    // if (index === 0) {
    //   this.head = this.head.next;
    //   return this.printList();
    // }

    const leader = this.traverseToIndex(index - 1);
    const removeNode = leader.next;
    const secondNode = removeNode.next;
    leader.next = secondNode;
    secondNode.prev = leader;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new DoublyLinkedList(10);
console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList.printList());
console.log(myLinkedList);
myLinkedList.prepend(4);
myLinkedList.prepend(3);
console.log(myLinkedList.printList());
console.log(myLinkedList);
myLinkedList.insert(9, 3);
console.log(myLinkedList.printList());
myLinkedList.insert(12, 5);
console.log(myLinkedList.printList());
myLinkedList.insert(20, 88);
console.log(myLinkedList.printList());
console.log(myLinkedList);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
console.log(myLinkedList);

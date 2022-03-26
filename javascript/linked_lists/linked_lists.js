// Prepend O(1)
// Append O(1)
// Lookup O(n)
// Insert O(n)
// Delete O(n)

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
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
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
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
    leader.next = removeNode.next;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(4);
myLinkedList.prepend(3);
console.log(myLinkedList.printList());
myLinkedList.insert(9, 3);
console.log(myLinkedList.printList());
myLinkedList.insert(12, 5);
console.log(myLinkedList.printList());
myLinkedList.insert(20, 88);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());

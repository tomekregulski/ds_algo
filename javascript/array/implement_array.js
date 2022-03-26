// Search O(n)
// Lookup O(1)
// Push O(1)
// Insert O(n)
// Delete O(n)

// Pros
// Fast lookups
// Fast push/pop
// Ordered

// Cons
// Slow inserts
// Slow deletes
// Fixed size (is using static arrays)

console.log('array');
const array = [1, 2, 3, 4, 5];

array.push(6); // O(1)

array.pop(); // O(1)

array.unshift(0); // O(n)

array.splice(2, 0, 3); // O(n)

// console.log(array);

// Arrays in JS are objects with integer-based keys

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // O(1)
  get(index) {
    return this.data[index];
  }

  // O(1)
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // O(1)
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // O(n)
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  // O(n)
  // advance (shift) all items from the given index to end of array by one index value
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
console.log(newArray);
console.log(newArray.get(1));
newArray.push('!');
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.push('!');
newArray.push('!');
console.log(newArray);
newArray.delete(2);
console.log(newArray);

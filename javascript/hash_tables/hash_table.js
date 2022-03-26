// Insert O(1)
// Lookup O(1)
// Delete O(1)
// Search O(1)

// Pros:
// Fast lookups (as long as good collision resolution)
// Fast inserts
// Flexible keys

// Cons:
// Unordered
// Slow key iteration

// Other notes:
// Hash tables are usually the naswer to improve Time Complexity
// Hash tables are some of the best ways to optimize your code
// One trade-off is that you end up using more space, but this is often fine

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('ahhhh!');
  },
};

user.age; // O(1)
user.spell = 'abra cadabra'; // O(1);
user.scream(); // O(1)

// Primary issue with hash tables is collisions
// Occurs when two values hash to the same key
// One way to resolve this is by separate chaining, which implements a linked list at that key

// Map vs. Object in JS
// Map allows any type, even a function, to be used as a key.
// Map also maintains insertion order
// Both are hash tables
// Set is a hash table as well

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  // does not work when collisions are present
  keys() {
    if (!this.data.length) {
      return undefined;
    }
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        } else {
          keysArray.push(this.data[i][0]);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('apples', 2);
console.log(myHashTable.data);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());

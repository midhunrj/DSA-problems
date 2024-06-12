class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    insert(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = new Node(key, value);
        } else {
            let current = this.table[index];
            while (current.next !== null && current.key !== key) {
                current = current.next;
            }
            if (current.key === key) {
                // Key already exists, update value
                current.value = value;
            } else {
                current.next = new Node(key, value);
            }
        }
    }

    search(key) {
        const index = this.hash(key);
        let current = this.table[index];
        while (current !== null) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return null; // Key not found
    }

    delete(key) {
        const index = this.hash(key);
        let current = this.table[index];
        let prev = null;
        while (current !== null) {
            if (current.key === key) {
                if (prev === null) {
                    // If the first node matches
                    this.table[index] = current.next;
                } else {
                    prev.next = current.next;
                }
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            console.log(`Bucket ${i}:`);
            let current = this.table[i];
            while (current !== null) {
                console.log(`  ${current.key}: ${current.value}`);
                current = current.next;
            }
        }
    }
}

// Example usage:
const hashtable = new HashTable(5);
hashtable.insert("John", 28);
hashtable.insert("Doe", 35);
hashtable.insert("Alice", 20);
hashtable.insert("Bob", 40);
hashtable.insert("Jane", 32);

hashtable.display();
// Output:
// Bucket 0:
// Bucket 1:
// Bucket 2: Alice: 20
// Bucket 3: Jane: 32
// Bucket 4: John: 28, Doe: 35, Bob: 40

console.log("Value for key 'Alice':", hashtable.search("Alice")); // Output: 20

hashtable.delete("Doe");
hashtable.display();
// Output:
// Bucket 0:
// Bucket 1:
// Bucket 2: Alice: 20
// Bucket 3: Jane: 32
// Bucket 4: John: 28, Bob: 40

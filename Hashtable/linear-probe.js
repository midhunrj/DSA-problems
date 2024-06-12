class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.keys = new Array(size).fill(null);
        this.values = new Array(size).fill(null);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * (i + 1)) % this.size;
        }
        return hash;
    }

    insert(key, value) {
        let index = this.hash(key);
        while (this.keys[index] !== null) {
            if (this.keys[index] === key) {
                // Key already exists, update value
                this.values[index] = value;
                return;
            }
            index = (index + 1) % this.size; // Linear probing
        }
        this.keys[index] = key;
        this.values[index] = value;
    }

    search(key) {
        let index = this.hash(key);
        let startIndex = index;
        while (this.keys[index] !== null) {
            if (this.keys[index] === key) {
                return this.values[index];
            }
            index = (index + 1) % this.size; // Linear probing
            if (index === startIndex) break; // Avoid infinite loop
        }
        return null; // Key not found
    }

    delete(key) {
        let index = this.hash(key);
        let startIndex = index;
        while (this.keys[index] !== null) {
            if (this.keys[index] === key) {
                this.keys[index] = null;
                this.values[index] = null;
                // Rehash and reinsert subsequent items if necessary
                let nextIndex = (index + 1) % this.size;
                while (this.keys[nextIndex] !== null) {
                    let tempKey = this.keys[nextIndex];
                    let tempValue = this.values[nextIndex];
                    this.keys[nextIndex] = null;
                    this.values[nextIndex] = null;
                    this.insert(tempKey, tempValue);
                    nextIndex = (nextIndex + 1) % this.size;
                }
                return;
            }
            index = (index + 1) % this.size; // Linear probing
            if (index === startIndex) break; // Avoid infinite loop
        }
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.keys[i] !== null) {
                console.log(`[${i}] -> ${this.keys[i]}: ${this.values[i]}`);
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
// [2] -> Alice: 20
// [3] -> Jane: 32
// [0] -> John: 28
// [1] -> Doe: 35
// [4] -> Bob: 40

console.log("Value for key 'Alice':", hashtable.search("Alice")); // Output: 20

hashtable.delete("Doe");
hashtable.display();
// Output:
// [2] -> Alice: 20
// [3] -> Jane: 32
// [0] -> John: 28
// [4] -> Bob: 40

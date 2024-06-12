class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }
   _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }
 insert(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }
 lookup(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (const pair of bucket) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return null;
    }
delete(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }
}
const hashTable = new HashTable(10);
hashTable.insert("apple", 5);
hashTable.insert("banana", 8);
hashTable.insert("orange", 3);

console.log("Lookup apple:", hashTable.lookup("apple")); // Output: Lookup apple: 5
console.log("Lookup banana:", hashTable.lookup("banana")); // Output: Lookup banana: 8
console.log("Lookup orange:", hashTable.lookup("orange")); // Output: Lookup orange: 3

hashTable.delete("banana");
console.log("After deletion:");
console.log("Lookup apple:", hashTable.lookup("apple")); // Output: Lookup apple: 5
console.log("Lookup banana:", hashTable.lookup("banana")); // Output: Lookup banana: null
console.log("Lookup orange:", hashTable.lookup("orange")); // Output: Lookup orange: 3

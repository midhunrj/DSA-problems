class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size).fill(null).map(() => []);
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
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                // Key already exists, update value
                bucket[i].value = value;
                return;
            }
        }
        // Key doesn't exist, add new key-value pair to bucket
        bucket.push({ key, value });
    }

    search(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].value;
            }
        }
        return null; // Key not found
    }

    delete(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            const bucket = this.table[i];
            let output = `Bucket ${i}:`;
            for (let j = 0; j < bucket.length; j++) {
                output += ` ${bucket[j].key}: ${bucket[j].value},`;
            }
            console.log(output.slice(0, -1)); // Remove the trailing comma
        }
    }

    // display() {
    //     for (let i = 0; i < this.size; i++) {
    //         console.log(`Bucket ${i}: \t`);
    //         const bucket = this.table[i];
    //         for (let j = 0; j < bucket.length; j++) {
    //             console.log(`  ${bucket[j].key}: ${bucket[j].value}`);
    //         }
    //     }
    // }
    
}

// Example usage:
const hashtable = new HashTable(5);
hashtable.insert("John", 28);
hashtable.insert("Doe", 35);
hashtable.insert("Alice", 20);
hashtable.insert("Bob", 40);
hashtable.insert("Jane", 32);

hashtable.display();
//hashtable.search("jane")
// Output:
// Bucket 0:
// Bucket 1: John: 28
// Bucket 2: Alice: 20
// Bucket 3: Jane: 32
// Bucket 4: Doe: 35, Bob: 40

console.log("Value for key ':", hashtable.search("Jane")); // Output: 20

hashtable.delete("Doe");
hashtable.display();
// Output:
// Bucket 0:
// Bucket 1: John: 28
// Bucket 2: Alice: 20
// Bucket 3: Jane: 32
// Bucket 4: Bob: 40

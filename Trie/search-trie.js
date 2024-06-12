class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
}}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
 insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false; // Character not found
            }
            node = node.children[char];
        }
        return node.isEndOfWord; // Check if it's the end of a word
     }
startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false; // Character not found
            }
            node = node.children[char];
        }
        return true; // Prefix exists
    }}
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("apricot");
console.log("Search 'apple' in trie:", trie.search("apple")); 
console.log("Search 'app' in trie:", trie.search("app")); 
console.log("Prefix search 'ap' in trie:", trie.startsWith("ap")); 
console.log("Prefix search 'ban' in trie:", trie.startsWith("ban")); 
console.log("Prefix search 'or' in trie:", trie.startsWith("or")); 
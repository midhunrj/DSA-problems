class TrieNode {
    constructor() {
      this.children = {}; // Object to store child nodes (characters)
      this.isEndOfWord = false; // Flag to indicate if the node represents a complete word
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
      for (let char of word) {
        if (!current.children[char]) {
          current.children[char] = new TrieNode();
        }
        current = current.children[char];
      }
      current.isEndOfWord = true;
    }
  
    search(prefix) {
      let current = this.root;
      for (let char of prefix) {
        if (!current.children[char]) {
          return false; // Prefix not found
        }
        current = current.children[char];
      }
      return current.isEndOfWord; // Check if the prefix is a complete word
    }
    startsWith(prefix) {
      let current = this.root;
      const words = [];
      
      function dfs(node, word) {
        if (node.isEndOfWord) {
          words.push(word);
        }
        for (const char in node.children) {
          dfs(node.children[char], word + char);
        }
      }
      
      for (let char of prefix) {
        if (!current.children[char]) {
          return words; // Prefix not found, no words to return
        }
        current = current.children[char];
      }
      // If prefix is found, perform DFS to find all words starting with it
      dfs(current, prefix);
      return words;
    }
  }
  
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("april");
  trie.insert("banana");
  console.log(trie.search("app")); 
  console.log(trie.search("appl")); 
  console.log(trie.startsWith("ap")); 
  
  
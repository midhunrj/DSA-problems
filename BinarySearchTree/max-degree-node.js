class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    findMaxDegreeNode() {
      if (!this.root) {
        return null;
      }
      let maxDegreeNode = this.root;
      let maxDegree = this.calculateDegree(this.root);
  
      const traverse = (node) => {
        if (node) {
          let currentDegree = this.calculateDegree(node);
          if (currentDegree > maxDegree) {
            maxDegree = currentDegree;
            maxDegreeNode = node;
          }
          traverse(node.left);
          traverse(node.right);
        }
      };
  
      traverse(this.root);
      return maxDegreeNode;
    }
  
    calculateDegree(node) {
      let degree = 0;
      if (node.left !== null) {
        degree++;
      }
      if (node.right !== null) {
        degree++;
      }
      return degree;
    }
  }
  
  // Example usage:
  const bst = new BinarySearchTree();
  bst.insert(26);
  bst.insert(16);
  bst.insert(32);
  bst.insert(64);
  bst.insert(75);
  bst.insert(18);
  bst.insert(43);
  bst.insert(10);
  bst.insert(87);
  bst.insert(7);
  
  const maxDegreeNode = bst.findMaxDegreeNode();
  if (maxDegreeNode) {
    console.log("Node with the maximum degree:", maxDegreeNode.value, "with degree", bst.calculateDegree(maxDegreeNode));
  } else {
    console.log("The tree is empty.");
  }
  
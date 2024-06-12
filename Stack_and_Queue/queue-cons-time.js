class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }

class Queue {
    constructor() {
      this.head = null; // Points to the front of the queue
      this.tail = null; // Points to the rear of the queue
      this.count = 0;   // Number of elements in the queue
    }
  
    // Node structure for doubly linked list
   
    enqueue(item){
      const newNode = new Node(item);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.count++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      const removedItem = this.head.data;
      if (this.size() === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.count--;
      return removedItem;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.head.data;
    }
  
    size() {
      return this.count;
    }
  
    isEmpty() {
      return this.count === 0;
    }
    display() {
        let current = this.head;
        let elements = [];
        while (current !== null) {
          elements.push(current.data);
          current = current.next;
        }
        console.log("Queue elements:", elements.join(", "));
      }
  }
  
  // Example usage:
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.display()
  console.log("Queue size:", queue.size());  // Output: 3
  console.log("Front element:", queue.peek());  // Output: 1
  
  queue.dequeue();
  console.log("Queue size after dequeue:", queue.size());  // Output: 2
  console.log("Front element after dequeue:", queue.peek());  // Output: 2
  queue.dequeue()
  
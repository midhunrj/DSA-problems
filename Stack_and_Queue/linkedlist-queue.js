class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = newNode;
        } else {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        this.size++;
    }

    dequeue() {
        if (!this.isEmpty()) {
            const removed = this.front.data;
            this.front = this.front.next;
            this.size--;
            if (this.isEmpty()) {
                this.rear = null;
            }
            return removed;
        } else {
            console.log("Queue is empty");
            return null;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.front.data;
        } else {
            console.log("Queue is empty");
            return null;
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
    middleelement()
    {
        const curr=this.head
        let slow=curr
        let fast =curr
        while(fast&&fast.next)
        {
            slow=slow.next
            fast=fast.next.next
        //   curr=curr.next
        }
        
        return slow
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Queue size:", queue.getSize());  // Output: 3
console.log("Front element:", queue.peek());  // Output: 1
console.log("Dequeued element:", queue.dequeue());  // Output: 1
console.log("findmiddke elemnt",queue.middleelement())

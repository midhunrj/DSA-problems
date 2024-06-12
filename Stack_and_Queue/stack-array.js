class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.stack.pop();
    }

    peek() {
        if (!this.isEmpty()) {
            return this.stack[this.stack.length - 1];
        } else {
            console.log("Stack is empty");
            return null;
        }
    }

    display() {
        let ar=''
        for (let i = this.stack.length - 1; i >= 0; i--) {
            ar +=this.stack[i];
        }
        console.log(ar);
    }

    deletemiddle() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        let mid = Math.floor(this.stack.length / 2);
        this.stack.splice(mid, 1); // Remove the middle element
    }
}

// Usage
const stack = new Stack();
let arr = "malayalamadam";
for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
}

console.log("Before deletion:");
stack.display();

stack.deletemiddle();
console.log("\nAfter deletion of middle element:");
stack.display();

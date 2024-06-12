
class Node {
    constructor(value) {
        this.value = value; 
        this.next = null; 
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null; 
    }

        add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    
    search(target) {
        let current = this.head;
        while (current) {
            if (current.value === target) {
                return current;             }
            current = current.next; 
        }
        return null; 
    }
}


const list = new SinglyLinkedList();
list.add(5);
list.add(10);
list.add(15);

const targetValue = 10;
const foundNode = list.search(targetValue);
if (foundNode) {
    console.log(`Value ${targetValue} found in the list.`);
} else {
    console.log(`Value ${targetValue} not found in the list.`);
}

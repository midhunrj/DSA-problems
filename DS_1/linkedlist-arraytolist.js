class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const newNode = new Node(data);
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
printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }  
    convertArrayToList(arr) {
        
        for (const element of arr) {
            this.append(element);
        }
    }
}
const arr = [10, 20, 30, 40, 50];
const list = new SinglyLinkedList();
list.convertArrayToList(arr);
console.log('Linked list:');
list.printList();

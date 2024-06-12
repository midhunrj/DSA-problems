class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }append(data) {
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
    }removeDuplicates() {
        let current = this.head;
        while (current && current.next) {
             if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {    
                current = current.next;
            }
        } }printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }}}const list = new SinglyLinkedList();
list.append(1);list.append(1);list.append(2);list.append(3);
list.append(3);list.append(4);list.append(5);list.append(5);
console.log('Original list:');
list.printList();
list.removeDuplicates();
console.log('List after removing duplicates:');
list.printList();

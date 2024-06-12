class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        } }
printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }}
    printReverseRecursive(currentNode) {
        if (currentNode === null) {
            return;
        }
        this.printReverseRecursive(currentNode.next);
       console.log(currentNode.data);
    }
    printListInReverseOrder() {
        this.printReverseRecursive(this.head);
    }}
const list = new SinglyLinkedList();
list.append(1);list.append(2);list.append(3);list.append(4);list.append(5);
console.log('List in order:');
list.printList();
console.log('List in reverse order:');
list.printListInReverseOrder();

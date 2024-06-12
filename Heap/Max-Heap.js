class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Helper methods to get parent and children indices
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    // Swap two elements in the heap
    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i1], this.heap[i2]];
    }

    // Method to heapify up
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)] < this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    // Method to heapify down
    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] > this.heap[largerChildIndex]) {
                largerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] > this.heap[largerChildIndex]) {
                break;
            } else {
                this.swap(index, largerChildIndex);
            }
            index = largerChildIndex;
        }
    }

    // Insert a value into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Remove the maximum element (the root) from the heap
    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    // Peek the maximum element
    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }

    // Build a heap from an array
    buildHeap(array) {
        this.heap = array;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(30);
maxHeap.insert(2);
console.log(maxHeap.remove()); // 30
console.log(maxHeap.peek());   // 10

class Minheap {
    constructor() {
        this.heap = [];
    }

    getparentindex(i) {
        return Math.floor((i - 1) / 2);
    }

    getleftchildindex(i) {
        return 2 * i + 1;
    }

    getrightchildindex(i) {
        return 2 * i + 2;
    }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }

    heapifyup() {
        let index = this.heap.length - 1;
        while (this.getparentindex(index) >= 0 && this.heap[this.getparentindex(index)] > this.heap[index]) {
            this.swap(this.getparentindex(index), index);
            index = this.getparentindex(index);
        }
    }

    heapifydown(index = 0) {
        while (this.getleftchildindex(index) < this.heap.length) {
            let smallerchildindex = this.getleftchildindex(index);
            if (this.getrightchildindex(index) < this.heap.length && this.heap[this.getrightchildindex(index)] < this.heap[smallerchildindex]) {
                smallerchildindex = this.getrightchildindex(index);
            }
            if (this.heap[index] <= this.heap[smallerchildindex]) {
                break;
            }
            this.swap(index, smallerchildindex);
            index = smallerchildindex;
        }
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyup();
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifydown();
        return root;
    }

    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }

    buildheap(array) {
        this.heap = array;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifydown(i);
        }
    }

    display() {
        for (let i = 0; i < this.heap.length; i++) {
            console.log(i, this.heap[i]);
        }
    }

    displayHeap() {
        const lines = [];
        this.printHeap(0, 0, lines);
        for (const line of lines) {
            console.log(line.join(''));
        }
    }

    printHeap(index, level, lines) {
        if (index >= this.heap.length) {
            return;
        }
        if (lines.length <= level) {
            lines.push([]);
        }
        this.printHeap(this.getrightchildindex(index), level + 1, lines);
        lines[level].push(' '.repeat(level * 4) + this.heap[index] + ' ');
        this.printHeap(this.getleftchildindex(index), level + 1, lines);
    }
}

// Example usage
const minh = new Minheap();
minh.insert(20);
minh.insert(49);
minh.insert(18);
minh.insert(79);
minh.display();
console.log("Removed:", minh.remove());
console.log("Peek element:", minh.peek());
minh.displayHeap();

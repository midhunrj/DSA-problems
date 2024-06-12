// class Heap{
//     constructor()
//     {
//         this.heap=[]
//     }

//     getparentindex(i)
//     {
//         return Math.floor((i-1/2))
//     }

//     getleftchildindex(i)
//     {
//         return 2*i+1
//     }
    
//     getrightchildindex(i)
//     {
//         return 2*i+2
//     }
//     swap(i1,i2)
//     {
//         [this.heap[i1],this.heap[i2]]=[this.heap[i2],this.heap[i1]]
//     }

//     heapifyup()
//     {
//         let index=this.heap.length-1
//         while(this.getparentindex(index)>=0&&this.heap[this.getparentindex(index)]<this.heap[index])
//         {
//             this.swap(this.getparentindex(index),index)
//             index=this.getparentindex(index)
//         }
//     }

//     heapifydown(index=0)
//     {
//         while(this.getleftchildindex(index)<this.heap.length)
//         {
//             let largerchildindex=this.getleftchildindex(index)
//             if(this.getrightchildindex(index)>this.heap.length&&this.heap[index])
//             {
//                 largerchildindex=this.getrightchildindex(index)
//             }
//             if(this.heap[index]>=this.heap[largerchildindex])
//             {
//                 break;
//             }
//             this.swap(index,largerchildindex)
//             index=largerchildindex
//         }
//     }

//     insert(value)
//     {
//         this.heap.push(value)
//         this.heapifyup()
//     }

//     remove()
//     {
//         if(this.heap.length==0)
//         {
//             return null
//         }
//         if(this.heap.length==1)
//         {
//             return this.heap.pop()
//         }
//         const root=this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifydown()
//         return root
//     }

//     buildheap(array)
//     {
//         this.heap=array
//         for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--)
//         {
//             this.heapifydown(i)
//         }
//     }
// }

// function heapsort(array)
// {
//     const hep=new Heap()
//     hep.buildheap(array)

//     for(let i=array.length-1;i>0;i--)
//     {
//         [array[0],array[i]]=[array[i],array[0]]
//         hep.heap.length--
//         hep.heapifydown()
//     }
//     return array
// }


// const array=[50,29,48,68,28,39]
// console.log("original array",array);
// const sortedarray=heapsort(array.slice())
// console.log("sortedarray :",sortedarray);

class minHeap {
    constructor() {
        this.heap = [];
    }

    parent(index) {
        return Math.floor((index - 1) / 2)
    }

    leftNode(index) {
        return 2 * index + 1;
    }

    rightNode(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    insert(value) {
        this.heap[this.heap.length] = value;
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let current = index;
        while (current > 0 && this.heap[current] < this.heap[this.parent(current)]) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }

    delete() {
        if (this.heap.length === 0) return false;
        const deletedValue = this.heap[0]
        if (this.heap.length === 1) {
            this.heap = [];
        }
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.length--;
        this.heapifyDown(0);
        return deletedValue;
    }

    heapifyDown(index) {
        let current = index;
        const left = this.leftNode(index);
        const right = this.rightNode(index)
        if (left < this.heap.length && this.heap[left] < this.heap[current]) {
            current = left
        }
        if (right < this.heap.length && this.heap[right] < this.heap[current]) {
            current = right;
        }
        if (current !== index) {
            this.swap(index, current);
            this.heapifyDown(current)
        }
    }
 }



const heap_sort = (array) => {
    const newheap = new minHeap();
    for(let arrayElems of array){
        newheap.insert(arrayElems)
    }
    let arrayIndex = 0;
    while(newheap.heap.length > 0){
        array[arrayIndex] = newheap.delete();
        arrayIndex++;
    }
    return array;
}



const array = [4,2,5,7,8,1,2,4,3,2,7,3,9,0,6];
console.log("Before sorting " , array);
console.log("After sorting " , heap_sort(array));

// function heapify(arr,n,i){
//     let smaller=i
//     let left=2*i+1
//     let right=2*i+2

//     if(left<n && arr[left]<arr[smaller]){
//         smaller=left
//     }
//     if(right<n && arr[right]<arr[smaller]){
//         smaller=right
//     }
//     if(smaller!==i){
//         [arr[i],arr[smaller]]=[arr[smaller],arr[i]]
//         heapify(arr,n,smaller)
//     }
// }
// function HeapSort(arr){
//     let n = arr.length
//     for(let i = Math.floor((n/2)-1);i>=0;i--){
//         heapify(arr,n,i)
//     }
//     // for(let i = n-1;i>0;i--){
//     //     [arr[0],arr[i]]=[arr[i],arr[0]]
//     //     heapify(arr,i,0)
//     // }
//     return arr
// }
// const array=[5,4,3]
// console.log('arrya is '+ HeapSort(array))
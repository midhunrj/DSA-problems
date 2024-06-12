// class priorityqueue{
//     constructor()
//     {
//     this.heap=[]
//     }

//     getparentindex(i)
//     {
//         return Math.floor((i-1)/2)
//     }
//     getleftchildnode(i)
//     {
//         return 2*i+1
//     }
//     getrightchildnode(i)
//     {
//         return 2*i+2
//     }
//     swap(i1,i2)
//     {
//         [this.heap[i1],this.heap[i2]]=[this.heap[i2],this.heap[i1]]

//     }
    
//     heapifyup(index)
//     {
//         while(this.getparentindex(index)>=0&&this.heap[this.getparentindex(index)]>this.heap[index])
//         {
//             this.swap(this.getparentindex(index),index)
//             index=this.getparentindex(index)
//         }
//     }

//     heapifydown(index)
//     {
//         while(this.getleftchildnode(index)<this.heap.length)
//         {
//             let smallerchildindex=this.getleftchildnode(index)
//             if(this.getrightchildnode(index)<this.heap.length&&this.heap[this.getrightchildnode(index)]<this.heap[smallerchildindex])
//             {
//                 smallerchildindex=this.getrightchildnode(index)
//             }
//             if(this.heap[index]<=this.heap[smallerchildindex])
//             {
//                 break;
//             }
//             this.swap(index,smallerchildindex)
//             index=smallerchildindex
//         }
//     }

//     insert(value)
//     {
//         this.heap.push(value)
//         this.heapifyup(this.heap.length-1)
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
//         this.heapifydown(0)
//         return root
//     }

//     peek()
//     {
//         return this.heap.length==0?null:this.heap[0]
//     }

// }

// const prioq=new priorityqueue()

// prioq.insert(20)
// prioq.insert(15)
// prioq.insert(23)
// prioq.insert(18)
// prioq.insert(36)
// prioq.insert(27)
// prioq.insert(7)
// console.log(prioq);
// console.log("priorityqueue elements in order of priority");
// while(prioq.peek()!=null)
// {
//     console.log(prioq.remove());
// }


class priorityqueue
{
    constructor()
    {
        this.queue=[]
    }

    getparentindex(i)
    {
        return Math.floor((i-1)/2)
    }
    getleftchild(i)
    {
        return 2*i+1
    }
    getrightchild(i)
    {
        return 2*i+2
    }
    swap(i1,i2)
    {
        [this.queue[i1],this.queue[i2]]=[this.queue[i2],this.queue[i1]]
    }

    enqueue(value,priority)
    {
        this.queue.push({value,priority})
        this.queueup(this.queue.length-1)
       // this.queue=this.queue.sort((a,b)=>a.priority-b.priority)
    }

    queueup(index)
    {
        let current=index
        while(current>0&&this.queue[current].priority<this.queue[this.getparentindex(current)].priority)
        {
            this.swap(current,this.getparentindex(current))
            current=this.getparentindex(current)
        }
    }

    dequeue()
    {
        if(this.queue.length==0)
        {
            return null
        }
        const root=this.queue[0]
        const last=this.queue.pop()
        if(this.queue.length>0)
        {
            this.queue[0]=last
            this.dequeuedown(0)
        }
        return root
    }

    dequeuedown(index)
    {
        let smallest=index
        const left=this.getleftchild(index)
        const right=this.getrightchild(index)

        if(left<this.queue.length&&this.queue[left].priority<this.queue[smallest].priority)
        {
            smallest=left
        }
        if(right<this.queue.length&&this.queue[right].priority<this.queue[smallest].priority)
        {
            smallest=right
        }

        if(smallest!==index)
        {
            this.swap(smallest,index)
            this.dequeuedown(smallest)
        }
    }

    printQueue()
    {
        console.log(this.queue.map(node=>`${node.value} (priority: ${node.priority})`));
    }
}

const prq=new priorityqueue()
prq.enqueue("lunch",4)
prq.enqueue("Dinner",1)
prq.enqueue("Supper",2)
prq.enqueue("Breakfast",3)

console.log("print queue after enqueue operations");
prq.printQueue()

console.log("queue after dequeue operations");
console.log(prq.dequeue());

console.log("queue after dequeue operation");
prq.printQueue()
console.log(prq);
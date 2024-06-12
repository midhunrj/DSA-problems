class DuplicateQueue
{
    constructor()
    {
        this.items=[]
    }
    enqueue(value)
    {
        this.items.push(value)
    }
    dequeue()
    {
        return this.items.shift()
    }
    display()
    {
        for(let i=0;i<this.items.length;i++)
        {
            console.log(i,this.items[i]);
        }
    }
    isEmpty()
    {
        return this.items.length==0
    }
    duplicate() {
    //     const seen=new Set;
    //     const uniqueQueue=new DuplicateQueue()
    //     while(!this.isEmpty())
    //     {
    //         const currentelement=this.dequeue()
    //         // console.log('current',currentelement)
    //         if(!seen.has(currentelement))
    //         {
    //             seen.add(currentelement)
    //             uniqueQueue.enqueue(currentelement)
    //         }
    //     }
    //     return uniqueQueue.items.join("")
    // }

        const uniqueQueue = new DuplicateQueue();
        const tempQueue = new DuplicateQueue();
        const resultQueue = new DuplicateQueue();

        while (this.items.length > 0) {
            const current = this.dequeue();
            let isUnique = true;

            // Check if current element is already in uniqueQueue
            while (uniqueQueue.items.length > 0) {
                const uniqueElement = uniqueQueue.dequeue();
                if (uniqueElement === current) {
                    isUnique = false;
                }
                tempQueue.enqueue(uniqueElement);
            }

            // Restore uniqueQueue from tempQueue
            while (tempQueue.items.length > 0) {
                uniqueQueue.enqueue(tempQueue.dequeue());
            }

            // If the element is unique, add it to uniqueQueue and resultQueue
            if (isUnique) {
                uniqueQueue.enqueue(current);
                resultQueue.enqueue(current);
            }
        }

        // Restore items from resultQueue back to the original queue
        while (resultQueue.items.length > 0) {
            this.enqueue(resultQueue.dequeue());
        }

        // Convert the queue back to a string
        return this.items.join("");
    }
       // let string=[]
        // for(let i=0;i<this.items.length;i++)
        // {
        //     if(!string.includes(this.items[i]))
        //     {
        //         string.push(this.items[i])
        //     }
        // }
        // return string.join("")
    
}
const queue=new DuplicateQueue()
let total="MalayalaM"
for(let i=0;i<total.length;i++)
{
    queue.enqueue(total[i])
}
queue.display()
console.log("this.duplicate",queue.duplicate())
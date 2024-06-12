class Queue{
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
        if(!this.isEmpty())
        {
            this.items.shift()
        }
    }

    display()
    {
        console.log("Queue",this.items)
    }

    isEmpty()
    {
        return this.items.length==0
    }
}
const queue=new Queue()

queue.enqueue(3)
queue.enqueue(6)
queue.enqueue(8)
queue.display()
queue.dequeue()
queue.display()
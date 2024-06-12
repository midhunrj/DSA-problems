class Node{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}
class CircularQueue
{
    constructor()
    {
        this.head=null
        this.tail=null
    }
    isEmpty()
    {
        return this.head==null
    }

    enqueue(value)
    {
        const node=new Node(value)
        if(this.isEmpty())
        {
        
          this.head=this.tail=node
        }
        else{
        this.tail.next=node
        this.tail=node
        }
        this.tail.next=this.head

    }

    dequeue()
    {
        if(this.isEmpty())
        {
            console.log("queue is empty");
            return
        }
        let removed=this.head.value
        this.head=this.head.next
        if(this.head==null)
        {
            this.tail=null
        }
        else
        {
        this.tail.next=this.head
        }
        return removed
    }
    
    display()
    {
        if(this.isEmpty())
        {
            console.log("queue is empty");
        }
        let curr=this.head
        do
        {
            console.log(curr.value);
            curr=curr.next
        }
        while(curr!=this.head)
    }

    peek()
    {
        if(this.isEmpty())
        {
            console.log("queue is empty");
            return
        }
        return this.head.value
    }
}

const circle=new CircularQueue()
let arr='Aavesaham'
circle.enqueue('ranganna ')
for(let i=0;i<arr.length;i++)
{
    circle.enqueue(arr[i])
}
circle.display()
console.log('Dequeue element',circle.dequeue())
console.log("/n after dequeue");
console.log("peek element",circle.peek());
circle.display()

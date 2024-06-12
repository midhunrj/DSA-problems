class Node{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor()
    {
        this.head=null
        this.rear=null
    }
    isEmpty()
    {
        return this.head==null
    }

    enqueue(value)
    {
        const newnode=new Node(value)
        if(this.isEmpty())
        {
        
          this.head=this.rear=newnode
         // this.rear=this.head
        }
        
        this.rear.next=newnode
        this.rear=newnode
        
    }

    dequeue()
    {
        if(this.isEmpty())
        {
            console.log("stack is empty");
            return
        }
        let removed=this.head.value
        this.head=this.head.next
        return removed

    }

    display()
    {
        let curr=this.head
        let string=''
        while(curr)
        {
           // console.log(curr.value);
           string +=curr.value
            curr=curr.next
        }
        console.log("queue elements",string);
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

const queue=new Queue()
let arr='Wakeup_sid'
queue.enqueue(89)
for(let i=0;i<arr.length;i++)
{
    queue.enqueue(arr[i])
}

queue.display()
console.log("dequeue element",queue.dequeue())
console.log("\n after deletion \n");
console.log("peek element ", queue.peek())
queue.display()
class Node{
    constructor(value)
    {
      this.value=value
      this.next=null
    }
}
class Stack{
    constructor()
    {
        this.head=null
    }
   isEmpty()
   {
    return this.head===null
   }
    push(value)
    {
        const newnode=new Node(value)
        newnode.next=this.head
        this.head=newnode
    }
    pop()
    {
        let removed=this.head.value
        this.head=this.head.next
        return removed
    }
    peek()
    {
        if(!this.head==null)
        {
            return this.head.value
        }
        else{
            console.log("stack is empty")
            return null
        }
    }
    display()
    {
        let curr=this.head
        while(curr)
        {
            console.log(curr.value);
            curr=curr.next
        }
    }
    deletenode(value)
    {
        if(this.isEmpty())
        {
            console.log("stack you have given is empty")
        }
        if(this.head.value==value)
        {
            this.head=this.head.next
            return this.head
        }
        let prev=null
        let curr=this.head
        while(curr)
        {
            if(curr.value==value)
            {
                prev.next=curr.next
                return curr
            }
            prev=curr
            curr=curr.next
        }

        if(curr==null)
        {
            console.log("node you are looking to delete is not found in the stack");
            return;
        }
    }

    // deletemiddle()
    // {
    //     if(this.isEmpty())
    //     {
    //         console.log("stack is empty");
    //         return
    //     }
    //     let slowptr=this.head
    //     let fastptr=this.head
    //     let prev=null

    //     while(fastptr &&fastptr.next)
    //     {
    //         prev=slowptr
    //         slowptr=slowptr.next
    //         fastptr=fastptr.next
    //     }

    //     if(prev)
    //     {
    //         prev.next=slowptr.next
    //     }
    //     else{
    //         this.head=slowptr.next
    //     }
    // }

    deletemiddle()
    {
        if(this.isEmpty())
        {
            console.log("stack is empty");
        }
        let size=0
        let curr=this.head
        let prev=null

        let tempstack=new Stack()
        while(curr)
        {
           tempstack.push(curr.value)
            size++
            curr=curr.next
        }

        let mid=Math.floor(size/2)
this.head=null
        for(let i=0;i<size;i++)
        {
            if(i!==mid)
            {
                this.push(tempstack.pop())
            }
            else{
                tempstack.pop()
            }
        }

       // console.log(tempstack);
    }
}

const stack=new Stack()
let arr="malayalamadam"
console.log("peek element",stack.peek())
stack.display()
for(let i=0;i<arr.length;i++)
{
    stack.push(arr[i])
}
console.log("peek element",stack.peek())

stack.display()
// stack.pop()
// stack.display()
// let mid=Math.floor(arr.length/2)
// console.log(arr[mid],'delete element');
// stack.deletenode(arr[mid])
stack.deletemiddle()
stack.display()
let reversedstring=''
while(!stack.isEmpty())
{
    reversedstring +=stack.pop()
}
console.log("reversed string",reversedstring);
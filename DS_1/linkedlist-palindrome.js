class Node{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}
class linkedlist{
    constructor()
    {
        this.head=null
    }

    append(value)
    {
        let node= new Node(value)
        if(!this.head)
        {
            this.head=node
        }
        else{
            let curr=this.head
            while(curr.next)
            {
                curr=curr.next
            }
            curr.next=node
        }
    }
    
    reverse()
    {
        let prev=null
        let curr=this.head
        while(curr)
        {
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
    print()
    {
        let curr=this.head
        while(curr)
        {
            console.log(curr.value);
            curr=curr.next
        }
    }

}
const list=new  linkedlist()

list.append("m")
list.append("a")
list.append("d")
list.append("a")
list.append("m")
list.print()
list.reverse()
list.print()

let forward=list.print()
list.reverse()
list.print()
let backward=list.print()
console.log("forward",forward);
console.log("backward",backward);
if(forward==backward)
{
    console.log("it is a palindrome");
}
else{
    console.log("it is not a palindrome");
}
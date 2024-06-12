// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//         this.size = 0;
//     }

//     push(data) {
//         const newNode = new Node(data);
//         newNode.next = this.top;
//         this.top = newNode;
//         this.size++;
//     }

//     pop() {
//         if (!this.isEmpty()) {
//             const popped = this.top.data;
//             this.top = this.top.next;
//             this.size--;
//             return popped;
//         } else {
//             console.log("Stack is empty");
//             return null;
//         }
//     }

//     peek() {
//         if (!this.isEmpty()) {
//             return this.top.data;
//         } else {
//             console.log("Stack is empty");
//             return null;
//         }
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }
// }

// // Example usage:
// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log("Stack size:", stack.getSize());  // Output: 3
// console.log("Top element:", stack.peek());   // Output: 3
// console.log("Popped element:", stack.pop());  // Output: 3

class node{
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
    push(value)
    {
      const newnode=new node(value)
      if(this.isEmpty())
      {
        //console.log("stack is Empty")
       // return
       //newnode.next=this.head
       this.head=newnode
      }
      else{
      newnode.next=this.head
      this.head=newnode
    
      }
    }
    pop()
    {
      if(this.isEmpty())
      {
        console.log("stack is Empty")
        return
      }
      let removed=this.head.value
      this.head=this.head.next
      return removed
    }
    top()
    {
      if(this.isEmpty())
      {
       console.log("stack is empty")
       return
      }
      return this.head.value
    }
    isEmpty()
    {
      return this.head==null
    }
    display()
    {
      let curr=this.head
      let values=''
      while(curr)
      {
        console.log(curr.value)
        curr=curr.next
      }
    }
  }
  
  const stq=new Stack()
  stq.push(90)
  stq.push(27)
  stq.push(17)
  stq.push(9)
  stq.display()
  console.log(stq.top())
  console.log(stq.pop())
  stq.display()
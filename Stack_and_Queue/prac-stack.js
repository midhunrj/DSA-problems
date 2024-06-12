// class Node{
//     constructor(data)
//     {
//         this.data=data
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//      this.head=null
//     }

//     push(value)
//     {
//         const newnode=new Node(value)
//         if(!this.head)
//         {
//             this.head=newnode
//         }
//         else{
//             newnode.next=this.head
//             this.head=newnode
//         }
//     }
//     pop()
//     {
//         let removed=this.head
//         this.head.next=this.head
//         return removed.data
//     }

//     peek()
//     {
//         return this.head.data
//     }
// }
// let stack=new Stack
// stack.push(10)
// stack.push(20)
// stack.push(30)


function quicksort(arr,left=0,right=arr.length-1)
{
    if(left<right)
    {
        const pivotindex=partition(arr,left,right)
        quicksort(arr,left,pivotindex-1)
        quicksort(arr,pivotindex+1,right)

    }
    return arr
}
function partition(arr,left,right)
{
    let pivot=arr[right]
    let i=left-1
    
    for(let j=left;j<arr.length;j++)
    {
        if(arr[j]<pivot)
        {
          i++
          swap(arr,i,j)
        }
        
    }
    swap(arr,i+1,right)
    return i+1
}
function swap(arr,i,j)
{
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

let array=[8,3,2,7,6]
let result=quicksort(array)
console.log(result);


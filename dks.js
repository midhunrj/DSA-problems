// let array=['f','w','g','h','g','m','s','c','a']

// function quicksort(arr,left=0,right=arr.length-1)
// {
//     if(left<right)
//     {
//         const pivotindex=partition(arr,left,right)
//         quicksort(arr,left,pivotindex-1)
//         quicksort(arr,pivotindex+1,right)
//     }
//     return arr
// }
// function partition(arr,left,right)
// {
//     const pivot=arr[right]
//     let i=left-1
//     for(let j=left;j<right;j++)
//     {
//         if(arr[j]<pivot)
//         {
//             i++
//             swap(arr,i,j)
//         }
//     }
//     swap(arr,i+1,right)
//     return i+1
// }

// function swap(arr,i,j)
// {
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
// }

// const sortedarray=quicksort(array)
// console.log(sortedarray);

// let string='hgdtrddujuiguawag'
// let s=string.split('')
// class hashtable{
//     constructor(size)
//     {
//         this.table=new Array(size)
//         this.size=size
//     }
// hash(key)
// {
//     let total=0
//     for(let i=0;i<key.length;i++)
//     {
//         total+=key.charCodeAt(i)
//     }
//     return total%this.size
// }

// insert(key,value)
// {
//     const index=this.hash(key)
//     let bucket=this.table[index]
//     for(let i=0;i<bucket.length;i++)
//     {
//         if(bucket[i].key==key)
//         {
//             bucket[i].value=value
//         }
//     }
//     bucket.push({key,value})
// }

// remove(key)
// {
//     const index=this.hash(key)
//     let bucket=this.table[index]
//     for(let i=0;i<bucket.length;i++)
//     {
//         if(bucket[i].key==key)
//         {
//             bucket[i].value=undefined
//         }
//     }
// }



// }

// let table=new hashtable(30)

// table.set(0,"d)
// table.remove()

let arr=['f', 'w', ['g', 'h'], 'g', 'm',[ 's', 'c'], 'a']
let len=arr.length
let k=0
var flat=[]
for(let i=0;i<len;i++)
{
    
    console.log(arr[i].length);
    let n=arr[i].length-1
   
    // if(arr[i].length > 1  )
    // {
    for(let j=0;j<arr[i].length;j++)
    {
        
        console.log(arr[i][j]);
        flat[k]=arr[i][j]
        k++
        
    }
   // len=len+n

}
//console.log(arr[i].length);

// 
//}
// }

console.log(flat);
// let name="Rahul Ranjan"
// class Node{
//     constructor(data)
//     {
//         this.data=data
//         this.next=null
//     }
// }

// class Stack{
//     constructor()
//     {
//         this.head=null
//     }

//     push(value)
//     {
//         const node=new Node(value)
//          node.next=this.head
//          this.head=node
//     }
//     display()
//     {
//     let curr=this.head
//     let items=[]
//         while(curr)
//         { 
//             items.push(curr.data)
//             curr=curr.next  
//         }
//         console.log(items)
//     }
// }

// const stacks=new  Stack()
// stacks.push("R")
// stacks.push("A")
// stacks.push("h")
// stacks.push("u")
// stacks.push("l")
// stacks.push(" ")
// stacks.push("R")
// stacks.push("A")
// stacks.push("n")
// stacks.push("j")
// stacks.push("A")
// stacks.push("n")
// stacks.display()


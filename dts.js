// function bubblesort(arr)
// {

//     let swapped
//     do{
//         swapped=false
//         for(let j=0;j<arr.length-1;j++)
//         {
//             if(arr[j]>arr[j+1])
//             {
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//                 swapped=true
//             }
//         }
      
//     }
//     while(swapped)
//     return arr

//     if(arr.length<=1)
//     {
//         return arr
//     }
//     else
//     {

//     }
// }
// let array=[60,40,50,26,10]
// console.log(bubblesort(array));

class Queue{
    constructor()
    {
        this.items=[]
    }
    enqueue(value)
    {
        // if(!this.isEmpty())
        // {

        // }
        console.log(value);
        this.items.push(value)
    }
    dequeue()
    {
        this.items.shift()
    }
    isEmpty()
    {
        return this.items.length==0
    }
    removeduplicate()
    {
        const seen=new Set()
        let unique=new Queue()

       for(let i=0;i<this.items.length;i++)
        {
            let cur=this.dequeue()
            console.log(cur);
            if(!seen.has(cur))
            {
                seen.add(cur)
                unique.enqueue(cur)

            }
            // i--
        }
        return unique
    }
    display()
    {
        for(let i=0;i<this.items.length;i++)
        {
            console.log(i,this.items[i])
        }
    }

}
const Que=new Queue()
let ar="MalayalaM"
console.log(ar.length);
for(let i=0;i<ar.length;i++)
{

    Que.enqueue(ar[i])
}
 Que.display()
 console.log(Que.removeduplicate())

// let ar="MalayalaM"
// function removeduplicates(arr)
// {
//     let hashtable={}
//     let result=[]
//     for(let i=0;i<arr.length;i++)
//     {
//         let cur=arr[i]
//         if(!hashtable[cur])
//         {
//             hashtable[cur]=true
//             result.push(cur)
//         }
//     }
//     return result.join("")
// }
// console.log(removeduplicates(ar))
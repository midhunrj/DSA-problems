// class hashtable
// {
//     constructor(size=20)
//     {
//         this.size=size
//         this.table =new Array(size).fill(null).map(() => []);
//     }
//     hash(key)
//     {
//         let total=0
//         for(let i=0;i<key.length;i++)
//         {
//             total +=key.charCodeAt(i)

//         }
//         return total%this.size
//     }

//     insert(key)
//     {
//         const index=this.hash(key)
      
//         const bucket=this.table[index]
//         for(let i=0;i<bucket.length;i++)
//         {
//             if(bucket[i]===key)
//             {
//                 return
//             }
           
//         }
//         bucket.push(key)
//     }

//     removeduplicates(str)
//     {
//         for(let i=0;i<str.length;i++)
//         {
//             this.insert(str[i])
//         }
//         let result=''
//         for(let i=0;i<this.size;i++)
//         {

//             const bucket=this.table[i]
            
//             for(let j=0;j<bucket.length;j++)
//             {
//                 result +=bucket[j];
//             }
//         }
//         return result
    
//     }
// }
// const hash=new hashtable()
// let result=hash.removeduplicates('madam')
// console.log(result);

// function removeduplicates(arr)
// {
//     let hashtable=new Map()
//     let result=''
//     for(let i=0;i<arr.length;i++)
//     {
//         let num=arr[i]
//         if(!hashtable.has(num))
//         {
//             hashtable.set(num)
//             result +=num
//         }
        

//     }
//     return result
// }

 let arr="MadaM"
 let res=countfrequency(arr)
 console.log(res);

function removeduplicates(arr)
{
    let hashtable={}
    let result=[]
    for(let i=0;i<arr.length;i++)
    {
        let num=arr[i]
        if(!hashtable[num])
        {
            hashtable[num]=true
            result.push(num)
        }
    }
     console.log("hashtable",hashtable);
    return result.join('')
}

function countfrequency(arr)
{
    let hashtable={}
    for(let i=0;i<arr.length;i++)
    {
      let num=arr[i]
      hashtable[num]=(hashtable[num]||0)+1
    }

    return hashtable
}
function hasduplicates(arr)
{
    let hashtable={}
    for(let i=0;i<arr.length;i++)
    {
        let num=arr[i]
        if(hashtable[num])
        {
            return true
        }
        hashtable[num]=true
    }
    return false
}

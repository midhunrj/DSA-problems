// function binarysearch(arr,target)
// {
//     let left=0
//     let right=arr.length
//     arr.sort((a,b)=>a-b)
//    console.log(arr,"this is the sortedarray")
//     while(left<=right)
//     {
//         let mid=Math.floor((left+right)/2)
//         if(arr[mid]==target)
//         {
//             return mid
//         }
//         else if(arr[mid]>target)
//         {
//             right=mid-1
//         }
//         else{
//             left=mid+1
//         }
//     }
//     return -1
// }

// let array=[59,57,38,97,42,68,47,87,27]
// console.log(binarysearch(array,47))

let arr=["a","b","c","d","e"]
let target="d"

function binarysearch(arr,target)
{
    let left=0;
    let right=arr.length-1
    while(left<=right)
    {
        let mid=Math.floor((left+right)/2)
    
        if(target==arr[mid])
        {
            return mid
        }
        else if(target<arr[mid])
        {
             right=mid-1
        }
        else{
             left=mid+1
        }
    }
}
console.log(binarysearch(arr,target))
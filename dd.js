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
            let right=mid-1
        }
        else{
            let left=mid+1
        }
    }
}
console.log(binarysearch(arr,target))
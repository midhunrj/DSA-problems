function binarysearchrecursion(arr,target,left=0,right=arr.length-1)
{
   arr.sort((a,b)=>a-b)
   console.log(arr,"this is the sortedarray")
   if(left>right)
   {
    return -1
   }
    while(left<=right)
    {
        let mid=Math.floor((left+right)/2)
        if(arr[mid]==target)
        {
            return mid
        }
        else if(arr[mid]>target)
        {
            return binarysearchrecursion(arr,target,left,right=mid-1)
        }
        else{
            return binarysearchrecursion(arr,target,left=mid+1,right)
        }
    }
}

let array=[87,69,30,79,64.27,33,97,59,4,18,9]
let target=33
let result=binarysearchrecursion(array,target)
console.log("the element we are looking",target,"is in this position",result);
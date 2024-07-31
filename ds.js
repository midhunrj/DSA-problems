function quicksort(arr,left=0,right=arr.length-1)
{
    if(left<right)
    {
        const pivotindex=partition(arr,left,right)
        const sortedleft=quicksort(arr,left,pivotindex-1)
        const sortedright=quicksort(arr,pivotindex+1,right)

    }
    return arr
}
function partition(arr,left,right)
{
    let pivot=arr[right]
    let i=left-1
    
    for(let j=left;j<arr.length;j++)
    {
        if(arr[i]<pivot)
        {
          i++
          swap(arr,i,j)
        }
        
    }
    swap(arr,i+1,right)
    return arr
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
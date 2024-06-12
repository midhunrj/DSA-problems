function quicksort(arr,left=0,right=arr.length-1)
{
    if(left<right)
    {
        console.log(arr,"before every recursion");
        const pivotIndex=partition(arr,left,right)
        quicksort(arr,left,pivotIndex-1)
        quicksort(arr,pivotIndex+1,right)
    }
    return arr
}
function partition(arr,left,right)
{
    const pivot=arr[right]
    let i=left-1  

    for(let j=left;j<right;j++)
    {
    if(arr[j]<pivot)
    {
        i++
        swap(arr,i,j)
    }
}
swap(arr,i+1,right)
console.log(arr,"in middle of swap");
return i+1
}
function swap(arr,i,j)
{
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

const array=[7,9,3,6,1,5,16,8,9,4]
console.log("original array",array);
const sortedarray=quicksort(array)
console.log("sorted array",sortedarray);
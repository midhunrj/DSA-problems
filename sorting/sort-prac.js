function bubblesort(arr)
{
    let swapped
    do{
        swapped=false
    
    for(let i=0;i<arr.length-1;i++)
    {
       if(arr[i]>arr[i+1])
       {
        let temp=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
        swapped=true
       } 
    }
}
while(swapped)
return arr

}
function insertionsort(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        let j=i-1
        let current=arr[i]

        while(arr[j]>current&&j>=0)
        {
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=current
    }
    return arr
}

function quicksort(arr,left=0,right=arr.length-1)
{
    if(left<right)
    {
        let pivotindex=partition(arr,left,right)
        quicksort(arr,left,pivotindex-1)
        quicksort(arr,pivotindex+1,right)
    }
    return arr
}
function partition(arr,left,right)
{
    let pivot=arr[right]
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
    return i+1
}
function swap(arr,i,j)
{
   let temp=arr[i]
   arr[i]=arr[j]
   arr[j]=temp
}
function selectionsort(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        let minindex=i
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[minindex])
            {
                minindex=j
            }
        }
        [arr[i],arr[minindex]]=[arr[minindex],arr[i]]
    }
    return arr
}

function mergesort(arr)
{
    if(arr.length<=1)
    {
        return arr
    }
    const mid=Math.floor(arr.length/2)
    const lefthalf=arr.slice(0,mid)
    const righthalf=arr.slice(mid)
    const sortedleft=mergesort(lefthalf)
    const sortedright=mergesort(righthalf)
    return merge(sortedleft,sortedright)
    
}
function merge(left,right)
{
    let leftindex=0
    let rightindex=0
    let result=[]
    
    while(leftindex<left.length&&rightindex<right.length)
    {
        if(left[leftindex]<right[rightindex])
        {
          result.push(left[leftindex])
          leftindex++
        }
        else
        {
            result.push(right[rightindex])
            rightindex++
        }
    }
    return result.concat(left.slice(leftindex),right.slice(rightindex))
}

let arr=[3,5,2,6,23,7,1,18,10]
let result=selectionsort(arr)
console.log(result);
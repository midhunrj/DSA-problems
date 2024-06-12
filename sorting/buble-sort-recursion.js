function bubblesort(arr,n)
{
    if(n==1)
    {
        return
    }

    for(let i=0;i<n;i++)
    {
        if(arr[i]>arr[i+1])
        {
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }
    }
    console.log("arr after each recursion",arr);
    bubblesort(arr,n-1)

}
let arr=[45,23,84,32,64,27,18]
bubblesort(arr,arr.length)

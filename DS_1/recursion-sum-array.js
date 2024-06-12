function sum(arr,index=0)
{
    if(index==arr.length)
    {
        return 0
    }
    else
    {
        return arr[index]+sum(arr,index+1)
    }
}
let array=[9,34,27,18,34,56,6]
console.log(sum(array));
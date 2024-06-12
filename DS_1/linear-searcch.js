function linearsearch(arr,target)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==target)
        {
            return i
        }
    }
    return -1
}
let arr=[30,26,87,48,96,59,63,17]
console.log(linearsearch(arr,59))
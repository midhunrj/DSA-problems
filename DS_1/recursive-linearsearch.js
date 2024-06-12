function linearsearchrecursion(arr,target,index=0)
{
    if(index==arr.length)
    {
        return -1
    }
    else if(arr[index]==target)
    {
        return index
    }
    else{
        return linearsearchrecursion(arr,target,index+=1)
    }
    
}
let arr=[30,26,87,48,96,59,63,17]
let target=48
console.log(linearsearchrecursion(arr,48))
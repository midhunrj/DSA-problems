function mergesort(arr)
{
    if(arr.length<=1)
    {
        return arr
    }

    const mid=Math.floor(arr.length/2)
    const lefthalf=arr.slice(0,mid)
    const righthalf=arr.slice(mid)
    console.log(lefthalf,"lefthalf\nrighthalf",righthalf);
    const sortedleft=mergesort(lefthalf)
    const sortedright=mergesort(righthalf)

    console.log(sortedleft,"left\nright",sortedright);
    console.log("merge values",merge(sortedleft,sortedright));
    return merge(sortedleft,sortedright)
}
function merge(left,right)
{
    let result=[]
    let leftIndex=0
    let rightIndex=0
    while(leftIndex<left.length&&rightIndex<right.length)
    {
        if(left[leftIndex]<right[rightIndex])
        {
            result.push(left[leftIndex])
            leftIndex++
        }
        else
        {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    console.log("result",result);
    return result.concat(left.slice(leftIndex),right.slice(rightIndex))
}
const  array=[8,4,6,10,7,1,3]
console.log("original array",array);
const sortedarray=mergesort(array)
console.log(sortedarray);
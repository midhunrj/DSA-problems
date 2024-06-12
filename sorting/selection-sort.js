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
                console.log("minindex",minindex);
            }
            //console.log(arr,"sort in innerloop");
        }
        if(minindex!==i)
        {
            [arr[i],arr[minindex]]=[arr[minindex],arr[i]]
        }
        console.log("in middle of sort",arr);
    }
return arr
}

const array=[8,10,1,4,3,6]
console.log("originalarray",array);
const sortedarray=selectionsort(array)
console.log("sorted array",sortedarray);
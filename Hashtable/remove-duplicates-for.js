const { log } = require("console")

function removeduplicates(arr)
{
    let i=0
    let k=0
    for(let j=1;j<arr.length;j++)
    {
        if(arr[i]!==arr[j])
        {
            i++
            arr[i]=arr[j]

        }

    }
    arr.length=i+1
    return arr
}

let array=[3,4,4,5,6,6,7,8,9,7,9,10]
let result=removeduplicates(array)
console.log(result);
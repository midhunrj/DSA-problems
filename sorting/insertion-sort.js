function insertionsort(arr) {
// const arr=str.split('')
console.log(arr,"before sort");
for(let i=1;i<arr.length;i++)
{
    let current=arr[i]
    let j=i-1
    while(arr[j]>current&&j>=0)
    {
        arr[j+1]=arr[j]
        j=j-1
        console.log("in j+1 swap",arr);
    }
    arr[j+1]=current
    console.log("in current swap",arr);
}
// const result=arr.join('')
// return result
return arr
}

 const arr="sachintendulkar"
let ar=[8,9,10,6,7]
const result=insertionsort(ar)
console.log(result);
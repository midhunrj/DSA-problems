let arr=[10,[10,34,3],5,7,[67,87],95]
let k=0
let result=[]
console.log(arr.length,"length");
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i],"i");
    // console.log(Number)
    console.log(typeof arr[i])
    if(typeof arr[i] !== "number")
    {
    
    for(let j=0;j<arr[i].length;j++)
    {
        console.log(arr[i][j]);
        result[k]=arr[i][j]
        k++
    }
}
else{
    result[k]=arr[i]
    k++
}

}
console.log("flat array",result);
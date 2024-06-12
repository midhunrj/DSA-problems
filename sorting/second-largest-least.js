function secondlargest(arr)
{
    const uniqueArr=Array.from(new Set(arr))

    uniqueArr.sort((a,b)=>b-a)
  console.log(uniqueArr,"unique");
    if(uniqueArr.length>=2)
    {
        return uniqueArr[1]
    }
    else
    {
        console.log("there is no second largest element");
        return -1
    }
}

let array=[34,12,29,16,3,14,34,45,89,65,35,6,4]
let result=secondlargest(array)
console.log(result);

// without inbuilt function //
function secondlargestoptimised(arr)
{
    let largest=-Infinity
    let secondlargest=-Infinity
    let smallest=Infinity
    let secondsmallest=Infinity
    console.log("without inbuilt",arr);
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>largest)
        {
            secondlargest=largest
            largest=arr[i]
            
        }
        else if(arr[i]!=largest&&arr[i]>secondlargest)
        {
            secondlargest=arr[i]
        }
    
    if(arr[i]<smallest)
    {
        secondsmallest=smallest
        smallest=arr[i]
    }
    else if(arr[i]<secondsmallest&&arr[i]!=smallest)
    {
        secondsmallest=arr[i]
    }
    
}
return [secondlargest,secondsmallest]
 
}

let arr=[34,56,23,17,86,78,58,5,86]
let res=secondlargestoptimised(arr)
console.log("without inbuilt \n secondlargest",res[0],"\nsecond least",res[1]);
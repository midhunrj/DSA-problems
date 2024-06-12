function rotatearray(nums,k=3)
{
    let size=nums.length
    
        k=k%size
    
    let rotated=nums.splice(size-k,size)
    console.log(rotated,"jj");
    nums.unshift(...rotated)
return nums
} 

let array=[2,5,8,3,9,59,6,83]
let result=rotatearray(array)
console.log(result);


//---------without inbuilt function--------//
function rotatearrayoptimised(nums,k=3)
{
    let size=nums.length
if(size>k)
{
    k=k%size
}

reverse(nums,0,nums.length-1)
reverse(nums,0,k-1)
reverse(nums,k,nums.length-1)

return nums
}
function reverse(nums,left,right)
{
    while(left<right)
    {
        let temp=nums[left]
        nums[left++]=nums[right]            //we can  also use like this nums[left]=nums[right]
        nums[right--]=temp                  // nums[right]=temp 
                                             // then left++
                                            // then right--
    }
}

let arr=[2,4,56,10,43,67,18,7,45]
let res=rotatearrayoptimised(arr)
console.log("without inbuilt function",res);
let a=[1,2,3]
let b=[4,5,6]
console.log(a+b);

function bubblesort(str){
    const arr=str.split('')

let swapped
do{
  swapped=false
  for(let i=0;i<arr.length-1;i++)
  {
    if(arr[i]>arr[i+1])
    {
        let temp=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
        swapped=true
    }
    
  }
  console.log(arr,"after every for loop");
}
while(swapped)

const string=arr.join('')
return string
}
const arr="abfcdge"
const result=bubblesort(arr)
console.log(result);
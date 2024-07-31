// let ar=["abc", "fg", "gggy"]

// function reverse(ar)
// {
//     let result=[]
//     for(let i=0;i<ar.length;i++)
//     {
//         let cur=ar[i]
//         let rev=''
//         for(let j=cur.length-1;j>=0;j--)
//         {
//             rev +=cur[j]
          
//         }
//         result.push(rev) 
//     }
//     return result
// }
// let result=reverse(ar)
// console.log(result);

// let ar="MalayalaM"

// function frequency(ar)
// {
//     let hashtable={}
//     let highest=0
//     let secondsmallest=8
//     let sec=''
//     for(let i=0;i<ar.length;i++)
//     {
//         let cur=ar[i]
//         console.log(hashtable[cur],"hash cur");
//         hashtable[cur]=(hashtable[cur]||0)+1
//         // if(hashtable[cur]=='y')
//         // {      
//         //     sec +=cur
                      
//         // }
//         if(hashtable[cur]>highest)
//         {
//             highest=hashtable[cur]
//             var value=cur
//         }
//         }
//     //console.log(sec)
//     //   for(let i=0;i<highest;i++)
//     //   {
//     //     sec +=value
//     //   }
//     console.log("most repeating value",value);
//     console.log(value.repeat(highest));
//       //console.log(sec);
//     return hashtable
    
// }
//  console.log(frequency(ar));


let ar={ h: 2, g: 3, y: 8, r: 1, d: 2 }

// let highest=Infintiy
for(let i=0;i<ar.length;i++)
{
    //let a[i]
    
   if(a<highest)
   {

   }

}
let obj=Object.entries(ar)
console.log(obj,"object entries");
let sort=obj.sort((a,b)=>b[1]-a[1])
let sorted={}
for(let [key,value] of sort)
{
  sorted[key]=value
}

console.log(sorted);

for( let [key,value] in sorted){
  console.log(key,value)
  break;
}

let sortedArray = [
  { halo: "a", value: 1 },
  [ 
    {midhun : 'b' , value : 2}
  ]
];

// Print the first key-value paiminr
// if (sortedArray.length > 0) {
//   console.log(`Key: ${sortedArray[0].key}, Value: ${sortedArray[0].value}`);
// }


 for( let i =0;i< sortedArray.length;i++){
       console.log(sortedArray[1])
 }
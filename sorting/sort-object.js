let ar={ h: 2, g: 3, y: 8, r: 1, d: 2 }

let arr=Object.entries(ar)
console.log(arr,"object entryie");
arr.sort((a,b)=>a[1]-b[1])
console.log("sort",sort(arr))
function sort(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        let minindex=i
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j][1]>arr[minindex][1])
            {
                minindex=j
            }
        }
        [arr[i][1],arr[minindex][1]]=[arr[minindex][1],arr[i][1]]

    }
    return Object.fromEntries(arr)
    // for(let i=0;i<arr.length-1;i++)
    // {
    //     for(let j=0;j<arr.length-1-i;j++)
    //     {
    //         if(arr[j][1]>arr[j+1][1])
    //         {
    //             let temp=arr[j][1]
    //             arr[j][1]=arr[j+1][1]
    //             arr[j+1][1]=temp
    //         }
    //     }
    // }
    // return Object.fromEntries(arr)
}
// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           // Swap arr[j] and arr[j + 1]
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }


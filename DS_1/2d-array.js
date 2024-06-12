function generateRandomMatrix(rows, columns) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < columns; j++) {
            // Generate random 0s and 1s
            matrix[i][j] = Math.round(Math.random());
        }
    }
    return matrix;
}
function twodarray(value,row,col)
{
    let arr=[]
    for(let i=0;i<row;i++)
    {
     arr.push([])
     
    
    for(let j=0;j<col;j++)
    {
        let v=Math.round(Math.random())
        arr[i].push(value[i])
    }
    
    }
    return arr

}
function findmostones()
{
    let highest=0
    let arr=generateRandomMatrix(4,3)
    for(let i=0;i<arr.length;i++)
    {
        let count=0
        for(let j=0;j<arr[i].length;j++)
        {
            if(arr[i][j]==1)
            {
               count++
               //let currindex=i
            }
        }
        if(count>highest)
        {
            highest=count
            var currindex=i
        }
    }
    return currindex
}
let value=[1,23,4,5,6]
console.log(twodarray(value,4,4))
console.log(generateRandomMatrix(4,3));
console.log("index",findmostones());

function twodarray(arr,row,col)
{
    let ar=[]
    for(let i=0;i<row;i++)
    {
        ar.push([])
        for(let j=0;j<col;j++)
        {
            ar[i].push(arr[j])
            

        }
    }
    return ar

}
let ar=[6,7,3,2,8]
console.log("twodarray", twodarray(ar,5,4))
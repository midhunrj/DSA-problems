let str='Viratkohli'
let inse='King'
let mid=Math.floor(str.length/2)
// for(let j=0;j<inse.length;j++)
// {
//     str[mid]=inse[j]
//      mid++
// }
let newword=str.slice(0,mid)+inse+str.slice(mid)
console.log(newword);

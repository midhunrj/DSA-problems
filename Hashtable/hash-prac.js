// class Hashtable{
//     constructor(size)
//     {
//         this.size=size
//         this.table=new Array(size)
//     }

//     hash(key)
//     {
//         let total=0
//         for(let i=0;i<key.length;i++)
//         {
//             total +=key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,value)
//     {
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(!bucket)
//         {
//             this.table[index]=[[key,value]]
//         }
//         else{
//         const samekeyitem=bucket.find(items=>items[0]==key)
//         if(samekeyitem)
//         {
//             samekeyitem[1]=value
//         }
//         else{
//             bucket.push([key,value])
//         }
//     }

//     }
//     get(key)
//     {
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket)
//         {
//             const samekeyitem=bucket.find(items=>items[0]==key)

//             if(samekeyitem)
//             {
//                 return samekeyitem[1]
//             }
//         }
//         return undefined
//     }
//     remove(key)
//     {
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket)
//         {
//             const samekeyitem=bucket.find(items=>items[0]==key)
//             if(samekeyitem)
//             {
//                 //console.log("value",samekeyitem[1]);
//             bucket.splice(bucket.indexOf(samekeyitem),1)
//             return samekeyitem[1]
//             }
//         }
//     }

//     display()
//     {
//         for(let i=0;i<this.table.length;i++)
//         {
//             console.log(i,this.table[i]);
//         }
//     }
// }

// const hash=new Hashtable(5)
// hash.set('jk',"Dil chahta hai")
// hash.set('jane',"premalu")
// hash.set('mejow',"Aavesham")
// hash.set('kilo',"jungliayn")
// hash.set('jbl',"Chak de india")
// hash.set("jena",489)
// console.log("get element",hash.get('jbl'))

// hash.display()
// console.log("removing element",hash.remove('jena'))
// hash.display()
// let arr='gggggggyfrd'
// for(let i=0;i<arr.length;i++)
// {
//     hash.set(arr[i],arr[i])
// }
//hash.display()

class Hashtable{
    constructor(size)
    {
        this.size=size
        this.table=new Array(size)

    }
    hash(key)
    {
        let total=0
        for(let i=0;i<key.length;i++)
        {
            total +=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value)
    {
        let index=this.hash(key)
        if(!this.table[index])
        {
            this.table[index]=[key,value]
            return
        }
        
        while(this.table[index])
        {
            index=(index+1)%this.size
        }
        this.table[index]=[key,value]
    }

   get(key)
   {
    let index=this.hash(key)
    let startindex=index
    while(this.table[index]&&this.table[index][0]!=key)
    {
        index=(index+1)%this.size
    }
    if(index==startindex)
    {
        console.log("key not found");
        return undefined
    }
    if(this.table[index]&&this.table[index][0]==key)
    {
        return this.table[index][1]
    }
   }
   remove(key)
   {
    let index=this.hash(key)
    let startindex=index
    while(this.table[index]&&this.table[index][0]!==key)
    {
        index=(index+1)%this.size
    }
    if(startindex==index)
    {
        console.log('key not found');
        return undefined
    }
    if(this.table[index]&&this.table[index][0]==key)
    {
        this.table[index]=undefined
    }
   }
   display()
   {
    for(let i=0;i<this.table.length;i++)
    {
        console.log(i,this.table[i]);
    }
   }
    
}

const hash=new Hashtable(6)
hash.set('jk',"Dil chahta hai")
hash.set('jane',"premalu")
hash.set('mejow',"Aavesham")
hash.set('kilo',"jungliayn")
hash.set('jbl',"Chak de india")
hash.set("jena",489)
console.log("get element",hash.get('jbl'))

hash.display()
console.log("removing element",hash.remove('jena'))
hash.display()
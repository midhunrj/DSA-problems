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
        const index=this.hash(key)
        const bucket=this.table[index]
        
        if(!bucket)
        {
            this.table[index]=[[key,value]]
        }
        else
        {
            const samekeyitem=bucket.find(items=>items[0]==key)
            console.log(samekeyitem,"samekeyitem");
            if(samekeyitem)
            {
                samekeyitem[1]=value
            }
            else
            {
                bucket.push([key,value])
            }
        }
        
    }

    get(key)
    {
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket)
        {
            let samekeyitem=bucket.find(items=>items[0]==key)
            if(samekeyitem)
            {
                return samekeyitem[1]
            }
        }
        return undefined
    }
    remove(key)
    {
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket)
        {
            let samekeyitem=bucket.find(items=>items[0]==key)
            
                if(samekeyitem)
                {
                    bucket.splice(bucket.indexOf(samekeyitem),1)
                }
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

let hash=new Hashtable(10)
hash.set('jell',29)
hash.set('john',34)
hash.set('jane','midhun')
hash.set('jena','sid')
console.log('getting values', hash.get('jane'))
hash.display()
hash.remove('jell')
console.log("\nafter deletion\n");
hash.set("jane","unni")
hash.display()
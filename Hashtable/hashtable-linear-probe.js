class Hashtable
{
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
        const bucket=this.table[index]
        // if(!this.table[index])
        // {
        //     this.table[index]=[key,value]
        //     return
        // }

        while(this.table[index])
        {
            index=(index+1)%this.size
        }

        this.table[index]=[key,value]
    }

    get(key)
    {
        let index=this.hash(key)
        const bucket=this.table[index]
        let startindex=index
        
        while(this.table[index]&&this.table[index][0]!==key)
        {
            index=(index+1)%this.size
        }

        if(index==startindex)
        {
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
            console.log("key not found");
            return
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
const hash=new Hashtable(10)
hash.set('john',23)
hash.set('virat',18)
hash.set('jane','midhun')
hash.set('qila','teqila')
hash.set('jena','sid')
console.log("getting values of key",hash.get('jena'))
hash.set('name',7)
hash.set(4,1)
hash.set('eman',10)
hash.display()
hash.remove('eman')
console.log('/n after deletion \n');
hash.display()